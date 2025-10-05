const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/catalog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const run = async () => {
  await Product.deleteMany(); // Clear old data

  await Product.insertMany([
    {
      name: "T-Shirt",
      price: 19.99,
      category: "Clothing",
      variants: [
        { color: "Red", size: "M", stock: 10 },
        { color: "Blue", size: "L", stock: 5 }
      ]
    },
    {
      name: "Sneakers",
      price: 89.99,
      category: "Footwear",
      variants: [
        { color: "White", size: "9", stock: 3 },
        { color: "Black", size: "10", stock: 7 }
      ]
    },
    {
      name: "Backpack",
      price: 49.99,
      category: "Accessories",
      variants: [
        { color: "Gray", size: "Standard", stock: 15 }
      ]
    }
  ]);

  console.log("Sample products inserted!");
  mongoose.disconnect();
};

run();
