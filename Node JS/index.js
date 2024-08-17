//const fs = require("fs")

//Writing to a file
// fs.writeFile("message.txt", "Hello from NodeJS!", (err)=>{
//     if (err) throw err;
//     console.log("This file has been saved.");
// })

//Reading from a file
// fs.readFile("./message.txt", "utf8",(err, data)=>{
//     if (err) throw err;
//     console.log(data)
// })

//npm i sillyname
//For more packages check npm.js
// var generateName = require("sillyname")
// var sillyName = generateName()
// console.log(`My name is ${sillyName}.`)

//using Ecma script, change type to module in packages.json
// import generateName from "sillyname"
// var sillyName = generateName();
// console.log(`My name is ${sillyName}.`)

//superheroes name generator
// import superheroes from 'superheroes';
// const name = superheroes.random();
// console.log(`I am ${name}.`)

//QR Code Genrator
import inquirer from 'inquirer';
import { url } from 'inspector';
import qr from "qr-image"
import fs from "fs"

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "Type in your URL",
        name: "URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has beem saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


