const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
  {
    title: String,
    webSite: String,
    author: String,
  },
  { versionKey: false }
);
module.exports = mongoose.model("books", bookSchema);
