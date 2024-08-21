const express = require("express");
const https = require("https")
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
    //console.log(req.body.cityName);
    const query = req.body.cityName;
    const appid = "<API-KEY>"
    const units = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query  +"&appid=" + appid +"&units=" + units
    https.get(url, (response) => {
        //console.log(response.statusCode)

        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const temperature = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            //console.log(temperature);            
            //console.log(description)

            res.write("<p>The weather is currently " + description + "</p>");
            res.write("<h1> The temperature in " + req.body.cityName +" is  " + temperature + " degrees Celsius</h1>");
            res.write("<img src=" + imageURL + ">");
            res.send()
        })
    })
    
})

app.listen(3000, () => {
    console.log("Server is listening on 3000")
}) 



