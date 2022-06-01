const casas = require("../models/casas.models");

const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const getAllcasas = async (req, res, next) => {
  try {
    const allcasas = await casas.find().populate("characters");
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      casas: allcasas,
    });
  } catch (error) {
    return next(error);
  }
};

const getcasasByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const casasByID = await casas.findById(id).populate("characters");
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      casas: casasByID,
    });
  } catch (error) {
    return next(error);
  }
};

const createcasas = async (req, res, next) => {
  try {
    const newcasas = new casas(req.body);
    if (req.file) {
      newcasas.escudo = req.file.path;
    }
    const createdcasas = newcasas.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      createdcasas: createdcasas,
    });
  } catch (error) {
    return next(error);
  }
};

const deleteCasas = async (req, res) => {
    try {
      const { id } = req.params;
      const casasBorrado = await casas.findByIdAndDelete(id);
      return res.status(200).json(casasBorrado)
  
    } catch (error) {
      return res.status(500).json(error)
    }
  
  };

module.exports = { getAllcasas, getcasasByID, createcasas, deleteCasas };