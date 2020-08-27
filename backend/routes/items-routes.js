const express = require("express");
const { check } = require("express-validator");

const itemsController = require("../controllers/items-controller");

// const checkAuth = require('../middleware/check-auth')
const router = express.Router();

router.get("", itemsController.getItems);

// router.use(checkAuth);

router.post("/", itemsController.createItem);

router.patch("/:iid", itemsController.updateItem);
router.delete("/:iid", itemsController.deleteItem);

module.exports = router;
