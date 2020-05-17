// Importing modules
const Product = require("../models/products");

// Controller to create product
module.exports.create_product = async function(req, res) {
  try {

    const lastEntry = await Product.find({})
      .sort({ productId: -1 })
      .limit(1);
    let productId;
    // If last entry does not exist, productid is 1
    if (lastEntry.length == 0) {
      productId = 1;
    }
    // Otherwise, add 1 to productid of last entry
    else {
      productId = lastEntry[0].productid + 1;
    }
    // Create the new document
    let newEntry = await Product.create({
      productid: productId,
      name: req.body.name,
      quantity: Number(req.body.quantity)
    });
    // Return response
    return res.status(201).json({
      data: {
        product: newEntry
      }
    });
  } catch (err) {
    // Error handling
    console.log("Error creating product", err);
    return res.status(500).json({
      message: "Interal server error"
    });
  }
};

// Controller to fetch all products
module.exports.get_products = async function(req, res) {
  try {
    // Fetch all products and ignore _id, createdAt, updatedAt and __v fields
    let products = await Product.find({}, { _id: 0, createdAt: 0, updatedAt: 0, __v: 0 });
    // Return response
    return res.status(200).json({
      data: {
        products: products
      }
    });
  } catch (err) {
    // Error handling
    console.log("Error fetching products", err);
    return res.status(500).json({
      message: "Interal server error"
    });
  }
};

// Controller to delete a product based on product id
module.exports.delete_product = async function(req, res) {
  try {
    // Fetch product based on product id
    await Product.findOne({ productid: Number(req.params.id) });
    // Delete document
    Product.remove();
    // Return response
    return res.status(200).json({
      data: {
        message: "product deleted"
      }
    });
  } catch (err) {
    // Error handling
    console.log("Error deleting product", err);
    return res.status(500).json({
      message: "Interal server error"
    });
  }
};

// Controller to upadte a product quantity based on product id
module.exports.update_quantity = async function(req, res) {
  try {
    // Fetch product based on product id
    let product = await Product.findOne({ productid: Number(req.params.id) });
    // Update product quantity
    product.quantity = Number(product.quantity) + Number(req.query.number);
    // Upadte document in the database
    await Product.updateOne(product);
    // Return response
    return res.status(200).json({
      data: {
        product: product,
        message: " Updated successfully"
      }
    });
  } catch (err) {
    // Error handling
    console.log("Error updating product", err);
    return res.status(500).json({
      message: "Interal server error"
    });
  }
};
