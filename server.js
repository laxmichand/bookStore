const express = require("express");
const app = express();
var cors = require("cors");
var path = require("path");
const { port, endpoint } = require("./backend/src/config/config");
const dbconn = require("./backend/src/utility/dbConnection");

console.log("env running =>", endpoint);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const book = require("./backend/src/routes/book");
app.use("/book", book);

app.use(cors());

app.use(express.static(path.join(__dirname, "frontend/dist")));
app.get(["/"], (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/frontend/dist" });
});

app.listen(`${port}`, function () {
  console.log(
    "server deployed on http://%s:%s",
    this.address().address,
    this.address().port
  );
});
