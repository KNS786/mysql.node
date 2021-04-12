var dbconn=require('../connection');

//create register table for user
dbconn.connect((err)=>{
   if(err) throw err;
   console.log("connected");
   var register='CREATE TABLE userregister(name varchar(255),email varchar(255),password varchar(255))';
   dbconn.query(register,(err,res)=>{
     if(err) throw err;
     console.log("Table created")
     console.log(res);
   })

})

module.exports=dbconn;