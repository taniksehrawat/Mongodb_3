const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/catalog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const run = async () => {
  // 1. Get all products
  const allProducts = await Product.find();
  console.log("All Products:", allProducts);

  // 2. Filter by category
  const clothing = await Product.find({ category: "Clothing" });
  console.log("Clothing Products:", clothing);

  // 3. Project variant colors and stock
  const projected = await Product.find({}, {
    name: 1,
    "variants.color": 1,
    "variants.stock": 1
  });
  console.log("Projected Variant Fields:", projected);

  // 4. Find products with variant stock less than 6
  const lowStock = await Product.find({ "variants.stock": { $lt: 6 } });
  console.log("Low Stock Variants:", lowStock);

  mongoose.disconnect();
};

run();
