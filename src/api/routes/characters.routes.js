const express = require("express");
const router = express.Router();


const {isAuth} = require("../../middlewares/auth.middleware");

const {
  getAllCharacters,
  getCharacterByID,
  createCharacter,
  deleteCharacter
} = require("../controllers/characters.controllers");

router.get("/", getAllCharacters);
router.get("/:id", getCharacterByID);
router.post("/",createCharacter);
router.delete("/:id",deleteCharacter);

module.exports = router;