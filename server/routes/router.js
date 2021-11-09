//all get, set,... routing is here

const express = require('express');
const route = express.Router()


//home route
route.get('/', (req,res)=>res.render("index"));
route.all('/about_us', (req,res)=>res.render('about_us'))
route.get('/contact',(req,res)=>res.render('contact'))
module.exports = route