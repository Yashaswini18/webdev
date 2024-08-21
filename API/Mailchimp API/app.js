const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { url } = require("inspector");

const app = express();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/signup.html")
});

app.post("/", (req, res) => {
    var firstName = req.body.fName;
    var secondName = req.body.sName;
    var email = req.body.email;
    //console.log(firstName, secondName, email)

    var data = {
        members: [
            {
                email_address: email,
                staus: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: secondName
                }
            }
        ]
    }
    var jsonData = JSON.stringify(data);

    const url = "https://us9.api.mailchimp.com/3.0/lists/6081da4c7b"
    const options = {
        method: "POST",
        auth: "Yashaswini:8ef6258ae23508192b322f7c44221e7c-us91"
    }   
    const request = https.request(url,options, (response) =>{
        
        if (response.statusCode === 200){
            res.sendFile(__dirname + "/success.html")
        }else {
            res.sendFile(__dirname + "/failure.html")
        }

        response.on("data", (data)=>{
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();
})

app.post("/failure", (req,res) => {
    res.redirect("/")
})

// app.listen(3000, () =>{      //Running in Local
app.listen( process.env.PORT || 3000, (req, res)=> {
    console.log("Server started on 3000")
});