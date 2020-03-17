var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');


router.get('/', function(req, res) {
    if(!req.session.user) res.render('welcome.ejs', {'status' : 0})
    else res.render('welcome.ejs', {'status' : 1})
})

module.exports = router;