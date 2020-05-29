//import model/package
const express = require("express");
const router = express.Router();

const prodRoutes = require("./products");

//make products route
router.use("/products", prodRoutes);

//export
module.exports = router;
