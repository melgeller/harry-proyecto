const Varita = require("../models/varitas.models");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const getAllVaritas = async (req, res, next) => {
  try {
    const allVaritas = await Varita.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      varita: allVaritas,
    });
  } catch (error) {
    return next(error);
  }
};

const getVaritaByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const varitaByID = await Varita.findById(id);
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      varita: varitaByID,
    });
  } catch (error) {
    return next(error);
  }
};

const createVarita = async (req, res, next) => {
  try {
    const newVarita = new Varita(req.body);
    const createdVarita = await newVarita.save();
    return res.json({
      status: 201,
      message: "Varita created",
      camera: createdVarita,
    });
  } catch (error) {
    return next(error);
  }
};

const deleteVarita = async (req, res) => {
  try {
    const { id } = req.params;
    const varitaBorrada = await Varita.findByIdAndDelete(id);
    return res.status(200).json(varitaBorrada);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { createVarita, getAllVaritas, getVaritaByID, deleteVarita };
