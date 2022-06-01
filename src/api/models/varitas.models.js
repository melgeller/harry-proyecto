const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VaritaSchema = new Schema(
  {
    master: { type: String, required: true },
    fabricante: { type: String, required: false },
    madera: { type: String, required: true },
    nucleo: { type: String, required: true},
    largo: { type: Number, required: false}
  },
  { timestamps: true }
);

const Varita = mongoose.model("varitas", VaritaSchema);

module.exports = Varita;