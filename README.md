# 🛒 E-Commerce Backend API

A complete **Node.js + Express + MongoDB** backend for an e-commerce application.
This project includes authentication, product management, cart system, orders, and security middleware.

---

# 🚀 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT Authentication**
* **bcryptjs**
* **Helmet**
* **CORS**
* **Morgan**
* **Express Rate Limit**

---

# 📁 Project Structure

```
ecommerce-backend
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   ├── productController.js
│   ├── cartController.js
│   └── orderController.js
│
├── middleware
│   ├── authMiddleware.js
│   └── rateLimiter.js
│
├── models
│   ├── User.js
│   ├── Product.js
│   ├── Cart.js
│   └── Order.js
│
├── routes
│   ├── authRoutes.js
│   ├── productRoutes.js
│   ├── cartRoutes.js
│   └── orderRoutes.js
│
├── utils
│   └── generateToken.js
│
├── .env
├── server.js
└── package.json
```

---

# ⚙️ Installation

### 1️⃣ Clone repository

```
git clone https://github.com/yourusername/ecommerce-backend.git
cd ecommerce-backend
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Create `.env` file

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/ecommerce
JWT_SECRET=your_secret_key
```

### 4️⃣ Run server

```
npm run dev
```

Server will start on:

```
http://localhost:5000
```

---

# 🔐 Authentication APIs

### Register User

```
POST /api/auth/register
```

Body

```
{
"name": "Test User",
"email": "test@gmail.com",
"password": "123456"
}
```

---

### Login User

```
POST /api/auth/login
```

Body

```
{
"email": "test@gmail.com",
"password": "123456"
}
```

---

### Update Profile

```
PUT /api/auth/profile
```

Headers

```
Authorization: Bearer TOKEN
```

Body

```
{
"name": "Updated Name"
}
```

---

# 📦 Product APIs

### Get All Products

```
GET /api/products
```

### Create Product

```
POST /api/products
```

### Update Product

```
PUT /api/products/:id
```

### Delete Product

```
DELETE /api/products/:id
```

---

# 🛒 Cart APIs

### Add to Cart

```
POST /api/cart
```

### Get Cart

```
GET /api/cart
```

### Remove Item

```
DELETE /api/cart/:id
```

---

# 📦 Order APIs

### Create Order

```
POST /api/orders
```

### Get User Orders

```
GET /api/orders/myorders
```

---

# 🔒 Security Features

* Helmet (secure HTTP headers)
* Rate Limiting
* JWT Authentication
* Password Hashing with bcrypt
* CORS enabled

---

# 🧪 Testing

You can test APIs using:

* **Postman**
* **Thunder Client**
* **Insomnia**

---

# 📌 Future Improvements

* Product Search
* Pagination
* Product Reviews
* Payment Integration (Stripe)
* Admin Dashboard APIs

---

# 👨‍💻 Author

Developed by **[Your Name]**

---

# ⭐ Contribute

Pull requests are welcome.
For major changes, please open an issue first.
