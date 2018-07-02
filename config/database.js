const secret = require("./secret");

module.exports = {
  development: {
    username: "postgres",
    password: secret.DATABASE_PASSWORD,
    database: "my-money",
    host: "127.0.0.1",
    dialect: "postgres",
    port: "8090"
  },
  test: {
    username: "postgres",
    password: secret.DATABASE_PASSWORD,
    database: "my-money-test",
    host: "127.0.0.1",
    dialect: "postgres",
    port: "8090",
    logging: false
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
};
