require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const highChartsRouter = require("./routes/highcharts");
const app = express();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Database!"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.urlencoded({ extended: false }));
app.use("/highcharts", highChartsRouter);


app.get("/", (req, res) => {
    res.render("index");
});



app.listen(3000);



// Update DB Data
// const series = {
//     name: 'Population',
//     data: [
//         ['Shanghai', 24.2],
//         ['Beijing', 20.8],
//         ['Karachi', 14.9],
//         ['Shenzhen', 13.7],
//         ['Guangzhou', 13.1],
//         ['Istanbul', 12.7],
//         ['Mumbai', 12.4],
//         ['Moscow', 12.2],
//         ['São Paulo', 12.0],
//         ['Delhi', 11.7],
//         ['Kinshasa', 11.5],
//         ['Tianjin', 11.2],
//         ['Lahore', 11.1],
//         ['Jakarta', 10.6],
//         ['Dongguan', 10.6],
//         ['Lagos', 10.6],
//         ['Bengaluru', 10.3],
//         ['Seoul', 9.8],
//         ['Foshan', 9.3],
//         ['Tokyo', 9.3]
//     ]
// };

// db.collection("Highcharts").findOneAndUpdate({}, { $set: series }, (err, res) => {
//     if (err) console.error(err);
//     console.log("1 document has inserted!");
// });








// Create DB Data
// const series = {
//     name: 'Population',
//     data: [
//         ['Shanghai', 24.2],
//         ['Beijing', 20.8],
//         ['Karachi', 14.9],
//         ['Shenzhen', 13.7],
//         ['Guangzhou', 13.1],
//         ['Istanbul', 12.7],
//         ['Mumbai', 12.4],
//         ['Moscow', 12.2],
//         ['São Paulo', 12.0],
//         ['Delhi', 11.7],
//         ['Kinshasa', 11.5],
//         ['Tianjin', 11.2],
//         ['Lahore', 11.1],
//         ['Jakarta', 10.6],
//         ['Dongguan', 10.6],
//         ['Lagos', 10.6],
//         ['Bengaluru', 10.3],
//         ['Seoul', 9.8],
//         ['Foshan', 9.3],
//         ['Tokyo', 9.3]
//     ]
// };

// db.collection("Highcharts").insertOne(series, (err, res) => {
//     if (err) console.error(err);
//     console.log(res.insertedCount + " has inserted!");
// });













