const express = require("express");
const router = express.Router();
const upload = require("../../middlewares/file")


const {
  getAllCharacters,
  getCharacterByID,
  createCharacter,
  deleteCharacter,
  getAllMagos
} = require("../controllers/characters.controllers");

router.get("/", getAllCharacters);
router.get("/magos", getAllMagos);

router.get("/id/:id", getCharacterByID);
router.post("/", upload.single("photo"), createCharacter);
router.delete("/id/:id",deleteCharacter);


module.exports = router;