const express = require("express");
const router = express.Router();
const userDetails = require("../models/user.js");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
    console.log(req.body);
    const data = await userDetails.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    console.log(data);
    console.log("Inside the Backend");
    res.json({ Success: true });
});
router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    try {
        const user = await userDetails.findOne({ email });
        console.log(user);
        if (!user || user.password !== password) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        res.status(200).json({
            success: true,
            message: "Login successful",
            user,
        });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ success: false, message: "Login failed" });
    }
});
module.exports = router;
