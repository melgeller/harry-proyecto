const express = require("express");
const router = express.Router();


const {
  getcasasByID,
  createcasas,
  getAllcasas,
  deleteCasas,
} = require("../controllers/casas.controllers");

router.get("/", getAllcasas);
router.get("/:id", getcasasByID);
router.post("/", [isAuth] ,createcasas);
router.delete("/:id", deleteCasas);
module.exports = router;