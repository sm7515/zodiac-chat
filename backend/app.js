const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.listen(3000);
