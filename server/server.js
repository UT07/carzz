const express=require("express");
const mysql=require("mysql");
const app=express();
const cors=require('cors');
const { response } = require("express");
app.use(cors());
app.use(express.json());
const db=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"password",
    database:"project_2",
    port:3306
});
db.connect(function(err) {              
    if(err) {                                     
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    }                                     
  });                                     
                                         
db.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                         
    } else {                                      
      throw err;                                  
    }
  });

  app.post("/signup",(request,response)=>{
      const Name=request.body.Name;
      const Phone=request.body.Phone;
      db.query(
          "INSERT INTO customer(Name,Phone)VALUES(?,?)",
          [Name,Phone],
          (err,res)=>{
            if(err){
                console.log(err);    
            }
            else{
                response.send(res);
            }
        }
      );
  });
app.listen(3001,()=>{
    console.log("running server");
});