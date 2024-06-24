var express = require('express');
const db = require('./db');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.send("hello world");
});

router.get('/postgres', function(req, res, next) {
  
});


module.exports = router;
