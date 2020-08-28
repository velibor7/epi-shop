const express = require("express");
const { check } = require("express-validator");

const itemsController = require("../controllers/items-controller");

const fileUpload = require("../middleware/file-upload");
// const checkAuth = require('../middleware/check-auth')

const router = express.Router();

router.get("", itemsController.getItems);

// router.use(checkAuth);

router.post("/", fileUpload.single("image"), itemsController.createItem);

router.patch("/:iid", itemsController.updateItem);
router.delete("/:iid", itemsController.deleteItem);

module.exports = router;
