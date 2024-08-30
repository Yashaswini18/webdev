//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.ejs")

//console.log(date())

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.set("view engine", "ejs")

const items = [];
const work_items = [];

app.get("/", (req,res) => {
    let day = date.getDate();
    //let day = date.getDay();
    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", (req,res) => {
    let item = req.body.newItem;
    //console.log(req.body)
    if (req.body.list === "Work"){
        work_items.push(item);
        //console.log(item)
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", (req,res) =>{
    res.render("list", {listTitle: "Work List", newListItems: work_items})
});

app.post("/work", (req, res) => {
    let item = req.body.newItem;
    items.push(item)
    res.redirect("/work");
})

app.listen(3000, (req,res)=>{
    console.log("Server started on port 3000.")
});