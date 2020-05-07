const express = require("express");
const mongoose = require("mongoose");
const db = mongoose.connection;
const Highcharts = require("../models/highcharts");
const router = express.Router();

router.get("/", async (req, res) => {
    const highcharts = await db.collection("Highcharts").findOne();   
    res.render("_highcharts", { highcharts: highcharts });
});





module.exports = router;


















