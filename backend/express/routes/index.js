var express = require('express');
var pgp = require('pg-promise');

var router = express.Router();

const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const host = process.env.POSTGRES_HOST;
const port = process.env.POSTGRES_PORT;
const database = process.env.POSTGRES_DATABASE;
const access= `postgres://${user}:${password}@${host}:${port}`;
// const db = pgp(access)

router.get('/', function(req, res, next) {
  res.send(access);
});

/*
router.get('/postgres', function(req, res, next) {
  db.one('SELECT $1 AS value', 123)
  .then((data) => {
    res.send(data.value)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })
});
*/


module.exports = router;
