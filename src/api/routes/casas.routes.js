const express = require("express");
const router = express.Router();
const {isAuth} = require("../../middlewares/auth.middleware");
const upload = require("../../middlewares/file");


const {
  getcasasByID,
  createcasas,
  getAllcasas,
  deleteCasas,
} = require("../controllers/casas.controllers");

router.get("/", getAllcasas);
router.get("/:id", getcasasByID);
router.post("/", [isAuth], upload.single("escudo"), createcasas);
router.delete("/:id", deleteCasas);

module.exports = router;