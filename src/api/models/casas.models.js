const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const casasSchema = new Schema(
  {
    name: { type: String, required: true },
    fundador: { type: String, require: true },
    color: { type: Number, required: false },
    animal: { type: String, required: false },
    elemento: { type: String, required: true },
  },
  { timestamps: true }
);

const casas = mongoose.model("casas", casasSchema);

module.exports = casas;