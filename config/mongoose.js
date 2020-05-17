// Including modules
const mongoose = require("mongoose");

// Connecting to the DB
mongoose.connect("mongodb://localhost/ecommerce", { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;
//error handling
db.on("error", function() {
  console.log("Error connecting to database");
});

//check for conection working
db.once("open", function() {
  console.log("Connection establised to database");
});

//export
module.exports = db;
