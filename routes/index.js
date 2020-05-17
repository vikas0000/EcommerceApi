//import model/package
const express = require("express");
const router = express.Router();

const productRoutes = require("./products");

//make products route
router.use("/products", productRoutes);

//export
module.exports = router;
