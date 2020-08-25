const express = require("express");
const { check } = require("express-validator");

const itemsControllers = require("../controllers/items-controller");

// const checkAuth = require('../middleware/check-auth')
const router = express.Router();

router.get("", itemsControllers.getItems);

// router.use(checkAuth);

router.post("/", itemsControllers.createItem);

router.patch("/:iid", itemsControllers.updateItem);
router.delete("/:iid", itemsControllers.deleteItem);

module.exports = router;
