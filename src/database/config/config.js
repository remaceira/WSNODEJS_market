const globalConstants = require('../../const/globalConstants')

module.exports = {

  "development": {
    "username": globalConstants.DB_USERNAME,
    "password": globalConstants.DB_PASSWORD,
    "database": globalConstants.DB_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": "",
    "database": "market_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "produccion": {
    "username": "root",
    "password": "",
    "database": "market_prod",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }

}
