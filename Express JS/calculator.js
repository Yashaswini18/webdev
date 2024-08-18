const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

//Calculator
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", (req, res) => {
    //console.log(req.body)
    var num1 = Number(req.body.num1); //num1 and mun2 are the names of input in html
    var num2 = Number(req.body.num2);
    var result = num1 + num2
    res.send("The total is " + result)
})

//BMI Calculator
app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", (req, res) => {
    //console.log(req.body.weight)
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height * height)
    res.send("The BMI is "+ bmi)
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})
