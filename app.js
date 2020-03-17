var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var router = require('./router/router')
var session = require('express-session')
var path = require('path')

app.listen(3000, function(){})

app.use('/js',express.static('js')) //static file path
app.use('/node_modules', express.static(path.join(__dirname + '/node_modules')))
app.use(bodyParser.json()) //post pattern get Parameter
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs') //view engine

app.use(session({
    secret : 'keyboard cat',
    resave : false,
    saveUninitialized : true
}))

//url routing
app.use(router)


 








