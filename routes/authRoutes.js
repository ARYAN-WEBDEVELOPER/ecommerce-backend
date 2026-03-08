const express = require("express");
const router = express.Router();

console.log("authRoutes loaded");

const { protect } = require("../middleware/authMiddleware");
const { registerUser, loginUser, updateUserProfile } = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/profile", protect, updateUserProfile);

router.get("/test", (req, res) => {
  res.send("Auth route working");
});

module.exports = router;

// {
//     "_id": "69ad87dde44dfaca06199df5",
//     "name": "Test User",
//     "email": "test@gmail.com",
//     "isAdmin": false,
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5YWQ4N2RkZTQ0ZGZhY2EwNjE5OWRmNSIsImlhdCI6MTc3Mjk4MDE5MCwiZXhwIjoxNzc1NTcyMTkwfQ.dPitXoEh_4vaZ5J9DlYnSdIMl6do-YDugRL-eeKoong"
// }

// {
//     "_id": "69ad87dde44dfaca06199df5",
//     "name": "Test User",
//     "email": "test@gmail.com",
//     "isAdmin": false,
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5YWQ4N2RkZTQ0ZGZhY2EwNjE5OWRmNSIsImlhdCI6MTc3Mjk4MDU3MywiZXhwIjoxNzc1NTcyNTczfQ.YE72PHR1ICfkew6y1UkcgOruUvBR-8UZS4GyYuTvtZc"
// }