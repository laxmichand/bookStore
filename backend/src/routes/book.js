"use strict";
const mongoose = require("mongoose");
const book = require("../models/bookSchema");
const { endpoint } = require("../config/config");
var express = require("express");
var router = express.Router();

router.post("/savebook", (req, res) => {
  console.log("inside", req.body);
  if (req.body.updateCriteria.id) {
    book
      .updateOne({ _id: req.body.updateCriteria.id }, { $set: req.body.data })
      .then((data) => {
        console.log("updated");
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    const bookObj = new book(req.body.data);
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
  }
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

router.delete("/delete/:id", (req, res) => {
  book
    .findByIdAndDelete(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
