require('./listener2')
var express=require("express");
var app=express();
var path=require("path");
var form=require('./server/routes/form');
var parser=require('body-parser');//to parse the request body.

//configuring the path of the file under css
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
app.use(express.static(path.join(__dirname,"node_modules/bootstrap/dist/css")));
app.use(express.static(path.join(__dirname,"node_modules/bootstrap/dist/js")));
app.use(express.static(path.join(__dirname,"node_modules/jquery/dist")));
//creates  a http listener
app.use(parser.urlencoded());///inercepts the request and parses urlencoded body
app.use("/form",form)

//configuring template engine that is here it is pug
app.set('views',path.join(__dirname,'public/templates'));//location of pug files
app.set('view engine','pug');//template engine name
app.get("/",function(request,response){
    response.send("NODE  JS is Serving....!!!");
})

//all url pattern starting with form will be redirected to form.js

app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,"public/html/home.html"));
})
app.get("/citypage",function(request,response){
    response.sendFile(path.join(__dirname,"public/html/home2.html"));
})
app.listen("4040",function(){
    console.log("server running in 4040");
})