const Order = require("../models/Order");
const Cart = require("../models/Cart");
const Product = require("../models/Product");

// @desc Create Order
exports.createOrder = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");

  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  // Calculate total
  const totalPrice = cart.items.reduce(
    (acc, item) => acc + item.qty * item.product.price,
    0
  );

  const order = new Order({
    user: req.user._id,
    orderItems: cart.items.map(item => ({
      product: item.product._id,
      qty: item.qty,
      price: item.product.price
    })),
    totalPrice,
  });

  const createdOrder = await order.save();

  res.status(201).json(createdOrder);
};

// @desc Simulate Payment
exports.payOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) return res.status(404).json({ message: "Order not found" });

  order.isPaid = true;
  order.paidAt = Date.now();

  // 🔥 Reduce stock
  for (let item of order.orderItems) {
    const product = await Product.findById(item.product);
    product.countInStock -= item.qty;
    await product.save();
  }

  // 🔥 Clear cart after payment
  await Cart.findOneAndDelete({ user: req.user._id });

  const updatedOrder = await order.save();

  res.json(updatedOrder);
};

// @desc Get logged in user orders
exports.getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate("orderItems.product");
  res.json(orders);
};

// @desc Get single order
exports.getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate("orderItems.product");

  if (order) res.json(order);
  else res.status(404).json({ message: "Order not found" });
};