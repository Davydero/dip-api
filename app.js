'use strict';
import _ from "lodash";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";

/*** Import Models ***/

import routes from "./api/routes/todoListRoutes";
import config from "./api/config"

const app = express();
// const port = process.env.PORT || 80; //comment when stay in windows environment
const port = process.env.PORT || 808; //comment when stay in linux  environment

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use("/", express.static(__dirname + 'public/index.html'))

/*** Set PATH  ***/

config.setPATH(__dirname);

routes(app);

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);
console.log('todo list RESTful API server started on: ' + port);
module.exports = app