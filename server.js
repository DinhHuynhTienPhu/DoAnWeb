const express = require('express');
const morgan =require('morgan');
const bodyparser = require('body-parser')
const exhbs = require('express-handlebars');
const path = require('path'); 
const dotenv=require('dotenv');


const app = express();
dotenv.config({path:'config.env'})
app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')));


app.engine('handlebars', exhbs());
app.set('view engine', 'hbs');

app.use('/', require('./server/routes/router'));
app.get('/', (rq,res)=>{
    res.render('index');
});

const PORT=process.env.PORT||8080

app.listen(PORT, ()=>console.log('server is running on local host '+ PORT+' ^_^ '));