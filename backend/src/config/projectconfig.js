module.exports = {
  jwt_secret: {
    secretkey: "thisissecret",
  },
  db_connection: {
    production: {
      uri:
        "mongodb+srv://book:book@cluster0.ijz9u.mongodb.net/books?retryWrites=true&w=majority",
    },
    development: {
      server: "127.0.0.1:27017",
      database: "book",
    },
  },
};
