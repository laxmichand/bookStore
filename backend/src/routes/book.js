"use strict";
const book = require("../models/bookSchema");
var express = require("express");
var router = express.Router();

router.post("/savebook", (req, res) => {
  if (req.body.updateCriteria.id) {
    req.body.data.updatedAt = new Date();
    book
      .updateOne({ _id: req.body.updateCriteria.id }, { $set: req.body.data })
      .then((data) => {
        res
          .status(200)
          .json({
            message: "handled post request to update book info",
            result: data,
            status: "success",
          })
          .send();
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
          status: "fail",
          message:
            typeof JSON.stringify(err) === Object ? JSON.stringify(err) : err,
        });
      });
  } else {
    req.body.data.createdAt = new Date();
    req.body.data.updatedAt = new Date();
    req.body.data.deleted = false;
    const bookObj = new book(req.body.data);
    bookObj
      .save()
      .then((data) => {
        res
          .status(201)
          .json({
            message: "handled post request to add book",
            result: data,
            status: "success",
          })
          .send();
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
          message:
            typeof JSON.stringify(err) === Object ? JSON.stringify(err) : err,
          status: "fail",
        });
      });
  }
});

router.get("/getallbook", (req, res) => {
  book
    .find({ deleted: false })
    .then((data) => {
      if (data.length) {
        res.status(200).json({
          message: "Data found",
          result: data,
          success: "success",
        });
      } else {
        res.status(200).json({
          message: "No data found",
          result: data,
          status: "success",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        status: "fail",
        error: err,
        message:
          typeof JSON.stringify(err) === Object ? JSON.stringify(err) : err,
      });
    });
});

router.delete("/delete/:id", (req, res) => {
  book
    .updateOne(
      { _id: req.params.id },
      { $set: { updatedAt: new Date(), deleted: true } }
    )
    .then((data) => {
      res.status(200).json({
        message: "book deleted successfully",
        result: data,
        status: "success",
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
        status: "fail",
        message:
          typeof JSON.stringify(err) === Object ? JSON.stringify(err) : err,
      });
    });

  // book
  //   .findByIdAndDelete(req.params.id)
  //   .then((data) => {
  //     res.status(200).json({
  //       message: "book deleted successfully",
  //       result: data,
  //       status: "success",
  //     });
  //   })
  //   .catch((err) => {
  //     res.status(400).json({
  //       error: err,
  //       status: "fail",
  //       message:
  //         typeof JSON.stringify(err) === Object ? JSON.stringify(err) : err,
  //     });
  //   });
});

module.exports = router;
