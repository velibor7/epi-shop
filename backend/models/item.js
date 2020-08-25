const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ["skydiving", "paragliding"],
    default: "other",
  },
});

module.exports = mongoose.model("Item", itemSchema);
