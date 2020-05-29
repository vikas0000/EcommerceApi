// Including modules
const mongoose = require("mongoose");

// Connecting to the DB
mongoose.connect("mongodb://localhost/ecommerce_API");

const dataBase = mongoose.connection;

dataBase.on('error', console.error.bind(console,'error connected to db'));
dataBase.once('open', function(){
    console.log('successful');
});

//export
module.exports = dataBase;
