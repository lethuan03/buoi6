const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: { type: String, default: "user" } // "admin" hoặc "user"
});

// Hàm tạo Admin nếu chưa có
UserSchema.statics.createAdmin = async function () {
    const adminExists = await this.findOne({ role: "admin" });
    if (!adminExists) {
        const hashedPassword = await bcrypt.hash("admin123", 10);
        await this.create({
            username: "admin",
            email: "admin@example.com",
            password: hashedPassword,
            role: "admin"
        });
        console.log("Admin user created: username=admin, password=admin123");
    }
};

module.exports = mongoose.model("User", UserSchema);
