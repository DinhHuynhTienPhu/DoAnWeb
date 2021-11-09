const express = require('express');
const morgan =require('morgan');
const bodyparser = require('body-parser')
const exhbs = require('express-handlebars');
const path = require('path'); 

const app = express();
app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')));
//app.use ('/',express.static(path.resolve("__dirname","assets")));
//app.use ('assets',express.static(path.resolve("__dirname","assets")));

app.engine('handlebars', exhbs());
app.set('view engine', 'hbs');


app.get('/', (rq,res)=>{
    res.render('index');
});

app.listen(3000, ()=>console.log('server is running on local host '+ 3000+' ^_^ '));