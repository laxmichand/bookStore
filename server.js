const express = require("express");
const app = express();
var path = require("path");
const { port, endpoint } = require("./backend/src/config/config");
const dbconn = require("./backend/src/utility/dbConnection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const book = require("./backend/src/routes/book");
app.use("/book", book);

app.options("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.sendStatus(200);
  next();
});

app.use("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(express.static(path.join(__dirname, "frontend/dist")));
app.get(["/"], (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-type,Accept,X-Access-Token,X-Key,token,Origin,X-Origin"
  );
  res.sendFile("index.html", { root: __dirname + "/frontend/dist" });
});

// app.post("/savebook", (req, res) => {
//   console.log("inside", req.body);
//   res.send(req.body);
// });

app.listen(`${port}`, function () {
  console.log(
    "server deployed on http://%s:%s",
    this.address().address,
    this.address().port
  );
});
