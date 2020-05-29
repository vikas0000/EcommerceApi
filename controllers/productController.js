// Importing modules
const prod = require("../models/products");

// Controller to create product
module.exports.createProd = function(req, res) {
 
    const last = prod.find({}).sort({ productId: -1 }).limit(1);

    var prodId;
    // If last entry exist, add 1 to productid of last entry
    if (last.length != 0) {

      prodId = last[0].productid + 1;
      
    }
    // Otherwise, product id equal to 1
    else {
      prodId = 1;
    }
    // Create the new document
    prod.create({

      productid: prodId,
      name: req.body.name,
      quantity: Number(req.body.quantity)

    },function(err, data){
      if(err){
          console.log("error in creating Product");
          return;
      }
      console.log("##########", data);
      return res.redirect('back');
  });
  
};

// Controller to fetch all products
module.exports.getProd = function(req, res) {
  
    // Fetch all products and ignore _id, createdAt, updatedAt and __v fields
    var p = prod.find({}, function(err,data){

        if(err){
            console.log('error in display product in db');
            return;
        }
        return res.status(200).json({
          data: {
            product: p,
          },
          message : "get successfully"
        });
    });
  
};

// Controller to delete a product based on product id
module.exports.deleteProd =  function(req, res) {
  
    // Fetch product based on product id
    prod.findOne({ productid: Number(req.params.id) });
    // Delete document
    prod.remove();
    // Return response
    return res.status(200).json({
      data: {
        message : " product deleted"
      }
      
    });
 
};

// Controller to upadte a product quantity based on product id
module.exports.updateQ = function(req, res) {
  
    // Fetch product based on product id
    var product = Product.findOne({ productid: Number(req.params.id) });
    // Update product quantity
    product.quantity = Number(product.quantity) + Number(req.query.number);
    // Upadte document in the database
    prod.updateOne(product);
    // Return response
    
    return res.status(200).json({
      data: {
        product: product,
        message : " Updated successfully"
      }
      
    });
  
};
