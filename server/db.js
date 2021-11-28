const mongoose=require("mongoose");
function connectDB(){

    mongoose.connect('mongodb+srv://254utkarsh:8586014804-Ut@cluster0.k2mp7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose