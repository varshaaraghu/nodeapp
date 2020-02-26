var router=require('express').Router();
var tasks=require('../db/dao')
var path=require('path')
var variables=require('../../environment');

router.post("/add",function(request,response){
    let sno=request.body.sno;
    let name=request.body.name;
    let city=request.body.city;

    let person={sno:sno,
                name:name,
                city:city};

    tasks.addPerson(person,function(err,data){
        if(err)
            response.sendStatus(500);
        else
            response.sendFile(path.join(variables.Enviroment.APPPATH,"public/html/home.html"));   
           //response.redirect(variables.Enviroment.APPPATH,"public/html/home.html");
    })            
   
});
router.get("/report",function(request,response){
    tasks.getPeople(function(err,data){
        if(err)
        response.sendStatus(500);
    else
        response.render("people",{people:data});//since we are fetching the pug pile,we use render and "people" is the pug file name
        // also  in the people:data,the people here refers to the people in for loop with which we retrieve the data 
        //in people.pug  
    })
});
module.exports=router;