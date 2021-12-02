
const jwt = require('express-jwt');
const express=require("express");
const mysql=require("mysql");
const app=express();
const cors=require('cors');
app.use(express.json());
app.use(cors());




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

app.post("/editCustomer",(request,response)=>{
  const Name=request.body.Name;
  const Phone=request.body.Phone;
  const CustID=request.body.CustID;
  const newPhone='('+Phone.substring(0,3)+')'+' '+Phone.substring(3,6)+'-'+Phone.substring(6);
  db.query(`UPDATE customer SET Name=${Name},Phone=${Phone} WHERE CustID=${CustID}`,(err,res)=>{
    if(err){
      console.log(err);
    }
    else{
      response.send(res);
    }
  })
})

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

app.post('/booking',(request,response)=>{
  const VehicleID=request.body.VehicleID;
  db.query(`SELECT StartDate,ReturnDate FROM rental WHERE VehicleID='${VehicleID}' `,(err,res)=>{
    if(err){
      console.log(err);
      response.send({err:err})    
  }
  else{
    console.log(res);
    response.send(res);
  }
  })
})
app.post("/rental",(request,response)=>{
  
  const CustID=request.body.CustID;  
  const VehicleID=request.body.VehicleID;
  const StartDate=request.body.StartDate;
  const OrderDate=request.body.OrderDate;
  const RentalType=request.body.RentalType;
  const Qty=request.body.Qty;
  const ReturnDate=request.body.ReturnDate;
  const TotalAmount=request.body.TotalAmount;
  const PaymentDate=request.body.PaymentDate;
  console.log(VehicleID,StartDate,OrderDate,RentalType,ReturnDate,TotalAmount)
  db.query(
    "INSERT INTO rental VALUES(?,?,?,?,?,?,?,?,?)",
    [CustID,VehicleID,StartDate,OrderDate,RentalType,Qty,ReturnDate,TotalAmount,PaymentDate],
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
  console.log(request.body)
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



app.post("/vehicles",(request,response)=>{
  db.query(`INSERT INTO Vehicle VALUES('${request.body.VehicleID}','${request.body.Description}',${request.body.Year},${request.body.Type},${request.body.Category})`,(err,res)=>{
    if(err){
      console.log(err);
  }
  else{
      response.send(res);
  }
  });
  
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
app.post("/userBookings",(request,response)=>{
  const CustID=request.body.CustID;
  const query=`SELECT * FROM VEHICLE NATURAL JOIN IMAGES NATURAL JOIN RENTAL WHERE CustID=${CustID} GROUP BY VehicleID` ;
  console.log(query)
  db.query(query,(error,res)=>{
    if(error){
      console.log(error);
  }
  else{
      response.send(res);
  }
  });
})
app.post("/filter", (req,response)=>{
  const Type=req.body.Type;
  const Category=req.body.Category;
  const StartDate=req.body.StartDate;
  const ReturnDate=req.body.ReturnDate;
  const query = `SELECT * FROM Vehicle NATURAL JOIN images WHERE Type=${Type} AND Category=${Category} AND VehicleID NOT IN (SELECT VEHICLEID FROM RENTAL WHERE (StartDate BETWEEN ${StartDate} AND ${ReturnDate} OR ReturnDate BETWEEN ${StartDate} AND ${ReturnDate}) )GROUP BY VehicleID;`;
  console.log(query)
  const result=db.query(query, (error,res)=>{
    if(error){
      console.log(error);
  }
  else{
      response.send(res);
  }
  });
  
});


app.listen(3001,()=>{
    console.log("running server");
});
