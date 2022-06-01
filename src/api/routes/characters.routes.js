const express = require("express");
const router = express.Router();
const upload = require("../../middlewares/file")


const {
  getAllCharacters,
  getCharacterByID,
  createCharacter,
  deleteCharacter
} = require("../controllers/characters.controllers");

router.get("/", getAllCharacters);
router.get("/:id", getCharacterByID);
router.post("/", upload.single("photo"), createCharacter);
router.delete("/:id",deleteCharacter);

module.exports = router;