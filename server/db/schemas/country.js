var mongoose=require('mongoose');

var countries=mongoose.model('countrymodel',new mongoose.Schema(//here countrymodel is a reference variable
    {
        id:String,
        name:String,
        continent:String,
        capital:String,
        population:Number
    }

),'countries');//the collection name in mongodb

module.exports=countries;