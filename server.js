const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const path=require('path');

const mysql=require('mysql');
const exphbs=require('express-handlebars');


//express handlebars
app.engine("handlebars",exphbs())
app.set("view-engine","handlebars");

//body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')));

//register page route
app.get('/',(req,res)=>{
   res.render('index',{
      title:'Shop app'
   })
});



//user table for app to store db
//var register=require("./models/register");

//app.use(bodyParser.json())

//user REGISTER api
app.use('/',require('./routes/api/register'));




app.listen(7000,()=>{
   console.log("App running localhost 7000");
});