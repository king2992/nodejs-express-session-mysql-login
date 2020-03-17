var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var main = require('./main/index');
var login = require('./login/index');
var logout = require('./logout/index');

router.use("/", main);
router.use("/login", login);
router.use("/logout", logout);

module.exports = router;