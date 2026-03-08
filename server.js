const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const rateLimiter = require("./middleware/rateLimiter");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(rateLimiter);

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// {
//     "_id": "69a4455e2aa30a203b60027b",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5YTQ0NTVlMmFhMzBhMjAzYjYwMDI3YiIsImlhdCI6MTc3MjM3MzM0MiwiZXhwIjoxNzc0OTY1MzQyfQ.g7GPzXKCEFXYoaoYT5RItb3p00MzQfNtqOAyY_Ye-LA"
// }