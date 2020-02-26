var mongoose=require('mongoose');

var cities=mongoose.model('citymodel',new mongoose.Schema(//here cities is a reference variable
    {
        id:String,
        name:String,
        countrycode:String,
        district:String,
        population:Number
    }

),'cities');//the collection name in mongodb

module.exports=cities;