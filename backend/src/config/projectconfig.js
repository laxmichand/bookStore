module.exports = {
  jwt_secret: {
    secretkey: "thisissecret",
  },
  db_connection: {
    production: {
      server: "@ds151626.mlab.com:51626",
      database: "book",
      username: "book",
      password: "book",
    },
    development: {
      server: "127.0.0.1:27017",
      database: "book",
    },
  },
};
