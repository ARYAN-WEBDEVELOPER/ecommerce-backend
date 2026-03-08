const Product = require("../models/Product");

// @desc Get all products
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// @desc Get single product
exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ message: "Product not found" });
};

// @desc Create product (Admin)
exports.createProduct = async (req, res) => {
  const { name, price, description, countInStock, category } = req.body;

  const product = new Product({
    name,
    price,
    description,
    countInStock,
    category,
    user: req.user._id,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

// @desc Update product (Admin)
exports.updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    product.description = req.body.description || product.description;
    product.countInStock = req.body.countInStock || product.countInStock;

    const updated = await product.save();
    res.json(updated);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

// @desc Delete product (Admin)
exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.deleteOne();
    res.json({ message: "Product removed" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};