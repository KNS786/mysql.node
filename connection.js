var mysql=require('mysql');

var conn=mysql.createConnection({
    host:'localhost',
   user:'root',
    password:'navaninayak777@ft',
    database:"MYAPP"
})

module.exports=conn;

/*conn.connect((err)=>{
   if(err) throw err;
   console.log("Connected");
   conn.query("CREATE DATABASE MYAPP",(err,res)=>{
      if(err) throw err;
     console.log("database created");
   })
})
*/
