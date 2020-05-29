const mongoose = require("mongoose");

// Schema for products
const productSchema = new mongoose.Schema(
  {
    productid: {
      type: Number,
      
    },
    name: {
      type: String,
      
    },
    quantity: {
      type: Number,
      
    }
  }
);

const Prod = mongoose.model("Prod", productSchema);

module.exports = Prod;
