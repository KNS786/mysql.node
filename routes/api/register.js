const express=require('express');
const router =express.Router();


//registe data base
const registerTable=require('../../models/register');
//var dublicates array
var registerUser=[];

//API for REGISTER user
router.post('/api/register',(req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var password=req.body.password;
     if( !name || !email || !password)
        res.status(400).json({errmsg:'please provide all fields'});
     else
         res.json({msgAdd:'successfully added user'});
    registerUser.push({name,email,password});
    console.log(registerUser);
})

module.exports=router;