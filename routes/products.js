//import
const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

// makeing route
router.get("/", productController.getProd);
router.post("/create", productController.createProd);
router.delete("/:id", productController.deleteProd);
router.get("/:id/updateQ", productController.updateQ);

//export
module.exports = router;
