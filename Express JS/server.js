//jshint esversion:6

const express = require("express")
const app = express();

app.get("/", (req, res) => {
    //console.log(req)
    res.send("Hello")
});

app.get("/contact", (req, res) => {
    res.send("Yashaswini")
})

app.get("/about", (req, res) => {
    res.send("Lorem Ipsum")
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
});