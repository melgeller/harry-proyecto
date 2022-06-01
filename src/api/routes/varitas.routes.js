const express = require("express");
const router = express.Router();

const {isAuth} = require("../../middlewares/auth.middleware");

const { getAllVaritas, getVaritaByID, createVarita, deleteVarita} = require("../controllers/varitas.controllers");



router.get("/", getAllVaritas);
router.get("/:id", getVaritaByID);
router.post("/", [isAuth], createVarita);
router.delete("/:id", deleteVarita)


module.exports = router;
