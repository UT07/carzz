
const jwt = require('express-jwt');
const express=require("express");
const mysql=require("mysql");
const app=express();
const cors=require('cors');
const { response, request } = require('express');
app.use(express.json());
// var serveStatic = require('serve-static')
// app.use(cors());
// const path=require('path')
// if(process.env.NODE_ENV==='production'){
//   app.use('/',express.static('client/build'))
//   app.get('/', function(req, res){
//     res.redirect('/todo');
//  });
//   app.get('*',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'client/build/index.html'))
//   })
// }

// app.use(serveStatic(path.join(__dirname, 'dist')))

var port = process.env.PORT || 8000
app.listen(port)
console.log('server started ' + port)

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
  
    }                                     
  });                                     
                                         
db.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
                           
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
  const returned=request.body.returned
  console.log(VehicleID,StartDate,OrderDate,RentalType,ReturnDate,TotalAmount)
  db.query(
    "INSERT INTO rental VALUES(?,?,?,?,?,?,?,?,?,0)",
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


app.post("/returnCar",(request,response)=>{
  db.query(`UPDATE RENTAL SET PaymentDate='${request.body.PaymentDate}',returned=1 WHERE VehicleID='${request.body.VehicleID}' AND ReturnDate='${request.body.ReturnDate}'`,(err,res)=>{
    if(err){
      console.log(err);
  }
  else{
      response.send(res);
  }
  })
  
})


app.post("/returnCar",(request,response)=>{
  db.query(`UPDATE rentalinformation SET RemainingBalance=0 WHERE VIN='${request.body.VehicleID}' AND ReturnDate='${request.body.ReturnDate}'`,(err,res)=>{
    if(err){
      console.log(err);
  }
  else{
      response.send(res);
  }
  })  
  
})

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
app.post("/editCar",(request,response)=>{
  db.query(`UPDATE vehicle SET Description='${request.body.Description}',Year=${request.body.Year},Type=${request.body.Type},Category=${request.body.Category} WHERE VehicleID='${request.body.VehicleID}'`,(error,res)=>{
    if(error){
      console.log(error);
  }
  else{
    console.log(res)
      response.send(res);
  }
  });
});
app.get("/returnCarView",(request,response)=>{
  db.query("SELECT * FROM rentalinformation WHERE  RemainingBalance<>0",(err,res)=>{
      if(err){
          console.log(err);
      }
      else{
          response.send(res);
      }
  });
});
app.get("/vehicles",(request,response)=>{
    db.query("SELECT DISTINCT * FROM vehicle, rate,images WHERE vehicle.Category=rate.Category AND vehicle.Type=rate.Type AND vehicle.VehicleID=images.VehicleID GROUP BY vehicle.VehicleID",(err,res)=>{
        if(err){
            console.log(err);
        }
        else{
            response.send(res);
        }
    });
});
app.post("/deleteCar",(request,response)=>{
  db.query(`DELETE FROM vehicle WHERE VehicleID='${request.body.VehicleID}'`,(error,res)=>{
    if(error){
      console.log(error);
  }
  else{
    console.log(res)
      response.send(res);
  }
  });
});
app.post("/filterCustomerSearchID",(request,response)=>{
  db.query(`SELECT distinct CustID,Name,CASE WHEN returned=0 THEN TotalAmount ELSE 0 END as 'Balance' FROM rental NATURAL JOIN customer WHERE CustID=${request.body.CustID} ORDER BY Name ASC`,(error,res)=>{
    if(error){
      console.log(error);
    }
    else{
      response.send(res);
    }

  });
});
app.post("/customerSearch",(request,response)=>{
  const query=
  db.query("SELECT distinct CustID,Name,CASE WHEN returned=0 THEN TotalAmount ELSE 0 END as 'Balance' FROM rental NATURAL JOIN customer ORDER BY Name ASC",(error,res)=>{
    if(error){
      console.log(error);
  }
  else{
    console.log(res)
      response.send(res);
  }
  });
});
app.post("/balanceSearch",(request,response)=>{
  const Balance=request.body.Balance;
  const query=`SELECT  CustID,Name,CASE WHEN returned=0 THEN TotalAmount ELSE 0 END as 'Balance' FROM rental NATURAL JOIN customer WHERE TotalAmount=${Balance} ORDER BY Name ASC;`
  db.query(query,(error,res)=>{
    if(error){
      console.log(error);
  }
  else{
      response.send(res);
  }
  });
});
app.post("/nameSearch",(request,response)=>{
  const Name=request.body.Name;
  const query=`SELECT distinct CustID,Name,CASE WHEN returned=0 THEN TotalAmount ELSE 0 END as 'Balance' FROM rental NATURAL JOIN customer WHERE Name LIKE '%${Name}%'ORDER BY Name ASC;`
  db.query(query,(error,res)=>{
    if(error){
      console.log(error);
  }
  else{
      response.send(res);
  }
  });
});

app.post("/vehicleNameSearch",(request,response)=>{
  const Name=request.body.Name;
  const query = `SELECT * FROM rentalinformation where vehicle like '%${Name}%' `;
  console.log(query)
  const result=db.query(query, (error,res)=>{
    if(error){
      console.log(error);
  }
  else{
      response.send(res);
  }
  });
})
app.post("/vinSearch",(request,response)=>{
  const Name=request.body.Name;
  const query = `SELECT * FROM rentalinformation where VIN like '%${Name}%' `;
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
app.post("/vehicleNoFilterSearch",(request,response)=>{
  
  const query = `SELECT * FROM rentalinformation `;
  console.log(query)
  const result=db.query(query, (error,res)=>{
    if(error){
      console.log(error);
  }
  else{
      response.send(res);
  }
  });
})

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

const PORT=process.env.PORT||'3001'

app.listen(PORT,()=>{
    console.log("running server");
});
