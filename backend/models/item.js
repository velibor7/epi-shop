const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, default: "uploads/images/noimage.png" },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ["skydiving", "paragliding", "snowboarding"],
    default: "other",
  },
});

module.exports = mongoose.model("Item", itemSchema);
