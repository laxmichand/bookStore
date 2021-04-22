let mongoose = require("mongoose");
const { endpoint } = require("../config/config");
const dbConn = require("../config/projectconfig").db_connection;

if (endpoint === "development1") {
  var url = `mongodb://${dbConn.development.server}/${dbConn.development.database}`;
  var url = `mongodb+srv://book:book@cluster0.ijz9u.mongodb.net/books?retryWrites=true&w=majority`;
  // var url=`mongodb://${dbConn.production.username}:${dbConn.production.password}${dbConn.production.server}/${dbConn.production.database}`
} else {
  // var url = `mongodb://${dbConn.production.username}:${dbConn.production.password}${dbConn.production.server}/${dbConn.production.database}`;
  var url = `mongodb+srv://book:book@cluster0.ijz9u.mongodb.net/books?retryWrites=true&w=majority`;
}
console.log(url);
class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error", err);
      });
  }
}
module.exports = new Database();
