const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title reuired"],
    },
    webSite: {
      type: String,
      required: [true, "webSite reuired"],
    },
    author: {
      type: String,
      required: [true, "author reuired"],
    },
    createdAt: Date,
    updatedAt: Date,
    deleted: {
      type: Boolean,
      required: [true, "flag required"],
    },
  },
  { versionKey: false }
);
module.exports = mongoose.model("books", bookSchema);
