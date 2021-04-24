"use strict";
const book = require("../models/bookSchema");
var express = require("express");
var router = express.Router();

router.post("/savebook", (req, res) => {
  if (req.body.updateCriteria.id) {
    book
      .updateOne({ _id: req.body.updateCriteria.id }, { $set: req.body.data })
      .then((data) => {
        res.status(200);
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
        res.status(200);
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
});

router.get("/getallbook", (req, res) => {
  book
    .find()
    .then((data) => {
      if (data.length) {
        res.status(200);
      } else {
        res.status(204);
      }
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
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
