
const jwt = require('express-jwt');
const express=require("express");
const mysql=require("mysql");
const app=express();
const cors=require('cors');
app.use(express.json());
app.use(cors());

const dbConnection=require('./db')


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
  exports.register = async function(req,res){
    var users={
        "name":req.body.Name,
        "phone":req.body.Phone
    }
    db.query('INSERT INTO customer SET ?',users, function (error, results, fields) {
        if (error) {
          res.send({
            "code":400,
            "failed":"error ocurred"
          })
        } else {
          res.send({
            "code":200,
            "success":"user registered sucessfully"
              });
          }
      });
}
exports.login = async function(req,res){
    var password = req.body.Phone;
    connection.query('SELECT * FROM users WHERE Phone = ?',[Phone], async function (error, results, fields) {
      if (error) {
        res.send({
          "code":400,
          "failed":"error ocurred"
        })
      }else{
        if(results.length >0){
          const comparison = await bcrypt.compare(password, results[0].password)
          if(comparison){
              res.send({
                "code":200,
                "success":"login sucessfull"
              })
          }
        }
        
      }
    });
  }

app.post("/signup",(request,response)=>{
    const Name=request.body.Name;
    const Phone=request.body.Phone;
    const ConfirmPhone=request.body.ConfirmPhone;
    if(Phone===ConfirmPhone){
        const newPhone='('+Phone.substring(0,3)+')'+' '+Phone.substring(3,6)+'-'+Phone.substring(6);
        console.log(newPhone);
        db.query(
            "INSERT INTO customer(Name,Phone)VALUES( ?,? )",
            [Name,newPhone],
            (err)=>{
                if (err) {
                    console.log(err);
                  } else {
                    response.send("Values Inserted");
                  }
                
            }
        );        
    }
    else{
        response.send({message:"Phone number not registered"});
    }
});
app.post("/rental",(request,response)=>{
  
  const CustID=request.body.CustID;  
  const VehicleID=request.body.VehicleID;
  const StartDate=request.body.StartDate;
  const OrderDate=request.body.OrderDate;
  const RentalType=request.body.RentalType;
  const ReturnDate=request.body.ReturnDate;
  const TotalAmount=request.body.TotalAmount;
  console.log(VehicleID,StartDate,OrderDate,RentalType,ReturnDate,TotalAmount)
  db.query(
    "INSERT INTO rental(CustID,VehicleID,StartDate,OrderDate,RentalType,ReturnDate,TotalAmount) VALUES(?,?,?,?,?,?,?)",
    [CustID,VehicleID,StartDate,OrderDate,RentalType,ReturnDate,TotalAmount],
    (err,result)=>{
      if (err) {
          console.log(err);
        } else {
          response.send(result);
        }
      
  }
    );
});
app.get('/rental',(request,response)=>{
  const custID=request.body.CustID;
  console.log(custID)
  db.query("SELECT * FROM rental ",(err,res)=>{
      if(err){
          console.log(err);
          response.send({err:err})    
      }
      else{
        console.log(res);
        response.send(res);
      }
  });
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
                    response.send({message:"Couldn't log in"});
                }
            }
            catch{
                console.log(err);
            }
        }
    );
});


app.get("/vehicles",(request,response)=>{
    db.query("SELECT DISTINCT * FROM vehicle, rate,images WHERE vehicle.Category=rate.Category AND vehicle.Type=rate.Type AND vehicle.VehicleID=images.VehicleID",(err,res)=>{
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
