const express=require("express");
const mysql=require("mysql");
const app=express();
app.use(express.json());
const db=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"password",
    database:"project_2",
});
app.listen(3001,()=>{
    console.log("running server");
});