

const express=require("express");
const mysql=require("mysql");
const app=express();
const cors=require('cors');
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
    const ConfirmPhone=request.body.ConfirmPhone;
    if(Phone===ConfirmPhone){
        const newPhone='('+Phone.substring(0,3)+')'+' '+Phone.substring(3,6)+'-'+Phone.substring(6);
        console.log(newPhone);
        db.query(
            "INSERT INTO customer(Name,Phone)VALUES('" + Name + "', '" + newPhone + "' )",
            [Name,newPhone],
            (err,res)=>{
                console.log(err);
            }
        );        
    }
    else{
        response.send({message:"Phone number not registered"});
    }
});
app.post("/login",(request,response)=>{
    const Phone=request.body.Phone;
    const newPhone='('+Phone.substring(0,3)+')'+' '+Phone.substring(3,6)+'-'+Phone.substring(6);
    
    db.query(
        "SELECT * FROM customer WHERE Phone=?",[newPhone],
        (err,result)=>{
            if(err){
                response.send({err:err})    
            }
            try{
                if(result.length> 0){   
                    response.send(result);    
                }
                else{
                    response.send({message:"Phone number not registered"});
                }
            }
            catch{
                console.log(err);
            }
        }
    );
});
app.get("/vehicles",(request,response)=>{
    db.query("SELECT * FROM vehicle",(err,res)=>{
        if(err){
            console.log(err);
        }
        else{
            response.send(res);
        }
    });
});


app.listen(3001,()=>{
    console.log("running server");
});
