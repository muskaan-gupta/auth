import express from "express";                          // npm init step 1
import cors from "cors";                                // npm install express bcryptjs jsonwebtoken mongoose dotenv step 2                              
import cookieParser from "cookie-parser";               // nmp install  cors cookie-parser step3
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
mongoose.Promise = global.Promise;


const port = process.env.PORT || 8000;

//Starting a server
app.listen(port, () => 
    {
  console.log(`App is running at port ${port} !!`);
});

