var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var connection = require('../../config/dbConfig.js')

router.get('/', function(req, res) {
    console.log(req.session.user)  
    res.render('login.ejs')
})

router.post('/', function(req, res, next) {
  var email = req.body.email
  var password = req.body.password

  var query = connection.query('SELECT * FROM TN_USER WHERE EMAIL = ? AND PASSWORD = ?  ', [email, password], function (err, rows){
    if(err) return console.log(err.message)

    if(rows.length){
      req.session.user = {
        "userId" : req.body.email,
        "createCurTime" : new Date()
      }
      return res.json(1);

    } else{
      return res.json(0)
    } 
  })   
});

module.exports = router;



