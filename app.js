const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://Dulanjaya:2LkelX6h2MeqdthD@cluster0.qul7p1k.mongodb.net/book-store?retryWrites=true&w=majority"
)
.then(() => console.log("Connected To Database"))
.then(() => {
  app.listen(5000);
})
.catch((err) => console.log(err));

