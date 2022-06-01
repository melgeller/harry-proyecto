const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("morgan");

dotenv.config();

const {connect} = require ("./src/utils/database");
connect()

const varitasRouter = require("./src/api/routes/varitas.routes");
const casasRouter = require("./src/api/routes/casas.routes");
const charactersRouter = require("./src/api/routes/characters.routes");

const PORT = process.env.PORT || 5000;

const server = express();

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const JWT_SECRET = process.env.JWT_SECRET

server.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.set("secretKey", JWT_SECRET)
  
  server.use("/characters", charactersRouter);
  server.use("/casas", casasRouter);
  server.use("/varitas", varitasRouter)