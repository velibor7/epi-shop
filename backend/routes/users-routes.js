const express = require("express");
const { check } = require("express-validator");

const usersController = require("../controllers/users-controller");
//const fileUpload = require("../middleware/file-upload");

const router = express.Router();

router.get("", usersController.getUsers);

router.post(
  "/register",
  // fileUpload.single("image"),
  [
    check("fullname").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersController.register
);

router.post("/login", usersController.login);

module.exports = router;
