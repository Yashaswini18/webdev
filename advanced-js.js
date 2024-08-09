//Array
// var guestlist = ["Angela", "Jack", "Pam"]
// var guestName = prompt("What is your name: ")
// if (guestlist.includes(guestName)) {
//     alert("Welcome!!")
// }else{
//     alert("Sorry, next time.")
// }

//who is buying lunch
var guestlist = ["Angela", "Jack", "Pam"]
function whoispaying(guestlist){
    var num = guestlist.length;
    var loc = Math.floor(Math.random() * num);
    var randomPerson = guestlist[loc];
    return randomPerson + " is buying lunch!"
}

//beer song
// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }



