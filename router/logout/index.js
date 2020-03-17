var express = require('express')
var app = express()
var router = express.Router()

router.get('/', function(req, res){
    req.session.destroy();
    res.redirect('/login')
})

module.exports = router;