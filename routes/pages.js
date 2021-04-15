var express = require('express');
var router = express.Router();
var lowdb = require('lowdb');

const FileSync = require('lowdb/adapters/FileSync')
// initialize (mock) Database
const adapter = new FileSync('./data/db.json')
const db = lowdb(adapter)




/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(db.get("pages").value());
});




module.exports = router;
