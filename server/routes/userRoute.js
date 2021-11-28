const express=require('express');
const router=express.Router();
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
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