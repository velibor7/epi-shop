const fs = require("fs");
const uuid = require("uuid");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const Item = require("../models/item");

const getItems = async (req, res, next) => {
  let items;
  try {
    items = await Item.find({});
  } catch (e) {
    const err = new HttpError("Fetching items failed, try again later.", 500);
    return next(err);
  }
  res.json({ items: items.map((item) => item.toObject({ getters: true })) });
};

const createItem = async (req, res, next) => {
  // const errs = validationResult(req)

  // if (!errs.isEmpty()) {
  // console.log(errs);
  // return next(new HttpError("Invalid inputs!"));
  // }
  const { title, description, price, category } = req.body;

  const newItem = new Item({
    title,
    description,
    price,
    category,
    // image: req.file.path,
  });
  console.log(newItem);

  try {
    await newItem.save();
  } catch (e) {
    console.log(e);
    const err = new HttpError("Creating item failed, try again.", 500);
    return next(err);
  }
  res.status(201).json({ item: newItem, message: "Item created!" });
};

const updateItem = async (req, res, next) => {
  const errs = validationResult(req);
  if (!errs.isEmpty()) {
    return next(new HttpError("Invalid inputs!", 404));
  }

  const { title, description, price } = req.body;
  const itemId = req.params.iid;

  let item;
  try {
    item = await Item.findById(itemId);
  } catch (e) {
    const err = new HttpError("Could not update item", 500);

    return next(err);
  }

  item.title = title;
  item.description = description;
  item.price = price;

  try {
    await item.save();
  } catch (e) {
    const err = new HttpError("Could not update item", 500);
    return next(err);
  }

  res.status(200).json({ item: item.toObject({ getters: true }) });
};

const deleteItem = async (req, res, next) => {
  const itemId = req.params.iid;

  let item;
  try {
    item = await Item.findById(itemId);
  } catch (e) {
    const err = new HttpError("Could not delete cocktail", 500);
    return next(err);
  }
  if (!item) {
    const err = new HttpError("Could not find item", 500);
    return next(err);
  }

  try {
    await item.remove();
  } catch (e) {
    const err = new HttpError("Something went wrong", 500);
    return next(err);
  }
  res.status(200).json({ message: "Item deleted" });
};

exports.getItems = getItems;
exports.createItem = createItem;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;
