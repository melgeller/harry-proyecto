const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        house: { type: String, required: true },
        muggle: {type: Boolean, required: false},
        photo: { type: String, required: true },
        pet: { type: String, required: false },
        varitas : {type: Schema.Types.ObjectId, ref: "varitas"}
    },
    { timestamps: true }
);

const Character = mongoose.model("character", CharacterSchema);

module.exports = Character;