const Character = require("../models/characters.models");

const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const getAllCharacters = async (req, res, next) => {
    try {
      const allCharacters = await Character.find().populate("varitas");
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        characters: allCharacters,
      });
    } catch (error) {
      return next(error);
    }
  };

  const getCharacterByID = async (req, res, next) => {
    try {
      const id = req.params.id;
      const characterByID = await Character.findById(id).populate("varitas");
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        character: characterByID,
      });
    } catch (error) {
      return next(error);
    }
  };

  const createCharacter = async (req, res, next) => {
    try {
      console.log(req.body)
      const newCharacter = new Character(req.body);
      if (req.file) {
        newCharacter.photo = req.file.path;
      }
      const createdCharacter = newCharacter.save();
      return res.json({
        status: 201,
        message: HTTPSTATUSCODE[201],
        createdCharacter: newCharacter,
      });
    } catch (error) {
      return next(error);
    }
  };

  const deleteCharacter = async (req, res) => {
    try {
      const { id } = req.params;
      const characterBorrado = await Character.findByIdAndDelete(id);
      return res.status(200).json(characterBorrado)
  
    } catch (error) {
      return res.status(500).json(error)
    }
  
  };

  const getAllMagos = async (req, res, next) => {
    try {
      
      const allMagos = await Character.find();
      const muggle = []
      for (const mago of allMagos) {
          
        if (mago.muggle === false) {
          muggle.push(mago)
        }
       
      }
      console.log(muggle);
      
        return res.json({
          status: 200,
          message: HTTPSTATUSCODE[200],
          allMagos: muggle,
        });
        
      
      
    } catch (error) {
      return next(error);
    }
  };





  module.exports = { getAllCharacters, getCharacterByID, createCharacter, deleteCharacter, getAllMagos};