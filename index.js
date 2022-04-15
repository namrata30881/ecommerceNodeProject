var express = require("express");
var bodyparser = require("body-parser");
var mongodb = require("mongodb");
var mongoose = require("mongoose");
var nodemailer = require("nodemailer");


var app = express();

app.use(express.static("assets"));

mongoose.connect("mongodb+srv://namrata30881:30799nama@cluster0.ihe4w.mongodb.net/ecommerce");
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.on("open", () => console.log("Connection Establised"));
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST,GET, PUT, DELETE,PATCH");
        return res.status(200).json({});
    }
    next();

});

app.get("/", function (req, res) {
    res.send("Hello Welcom to Resume buliding");
    res.end();
});

app.get("/hello", function (req, res) {
    res.send("This is hello page");
    res.end();
});


app.use("/admin", require("./routes/admin"));
app.use("/product", require("./routes/product"));
app.use("/order", require("./routes/order"));
app.use("/subscription", require("./routes/subscription"));
const  PORT = process.env.PORT || 3100;


app.listen(PORT, function () {
    console.log("Node Server Started");
});  
