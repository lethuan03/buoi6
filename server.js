require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const User = require("./models/User");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"));

app.use("/auth", authRoutes);

// Tạo admin mặc định nếu chưa có
User.createAdmin();

app.listen(3000, () => console.log("Server running on port 3000"));
