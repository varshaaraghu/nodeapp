var mysql=require('mysql');

var connection=mysql.createPool({

    host:'localhost',
    user:'root',
    password:'orcl',
    database:'fidelity'

});

module.exports=connection

//sequelize --NodeJS ORM Framework