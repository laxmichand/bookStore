"use strict";
const mongoose = require("mongoose");
const book = require("../models/bookSchema");
const { endpoint } = require("../config/config");
var express = require("express");
var router = express.Router();

router.post("/savebook", (req, res) => {
  console.log("inside", req.body);
  const bookObj = new book({
    title: req.body.title,
    webSite: req.body.webSite,
    author: req.body.author,
  });
  bookObj
    .save()
    .then((data) => {
      console.log("data save");
      res.send(data);
    })
    .catch((err) => {
      console.log("err", err);
      res.send(err);
    });
});

router.get("/getallbook", (req, res) => {
  book
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
