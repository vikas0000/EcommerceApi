// Including modules
const express = require("express");
const port = 8000;
const db = require("./config/mongoose");
const routes = require("./routes/index");

const app = express();


// Handling routes
app.use("/", routes);

// Starting the server
app.listen(port, function(err) {
  if (err) console.log(`Error in starting server`);
  else console.log(`Server started on port`);
});
