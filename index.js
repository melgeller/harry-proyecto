const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("morgan");

dotenv.config();

const {connect} = require ("./src/utils/database");
connect()

const PORT = process.env.PORT || 5000;

const server = express();

const JWT_SECRET = process.env.JWT_SECRET

server.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  