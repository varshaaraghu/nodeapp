var express=require("express");
var app=express();
var cities=require('./server/routes/cities')
var mongoose=require("mongoose");
var parser=require('body-parser');
mongoose.connect('mongodb://localhost/fidelity');

//to check the proper connection is established
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));

db.once('open',function(){
    console.log("mongodb connection established");
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(parser.json());
app.use("/cities",cities);
app.get("/",function(req,res){
    res.send("MONGO API HOME");
})
app.listen(4050,function(){
    console.log("SERVER 4050 IS RUNNING");
})