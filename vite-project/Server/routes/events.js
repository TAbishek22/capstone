const express = require("express");
const router = express.Router();
const Event = require("../models/userEvent.js");

router.post("/create", async (req, res) => {
    try {
        const { title, description, date } = req.body;
        const newEvent = await  Event.create({
            title: title,
            description: description,
            date: date,
        });
        res.status(201).json({
            success: true,
            message: "Event created successfully",
        });
    } catch (error) {
        console.error("Error creating event:", error);
        res.status(500).json({
            success: false,
            message: "Failed to create event",
        });
    }
});
router.get("/getEvent", async (req, res) => {
    try {
        const newEvent1 = await Event.find({});
        res.status(201).send(newEvent1);
        console.log(newEvent1)
    } catch (error) {
        console.error("Error creating event:", error);
        res.status(500).json({
            success: false,
            message: "Failed to create event",
        });
    }
});

module.exports = router;
