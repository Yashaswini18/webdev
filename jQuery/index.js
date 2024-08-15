// $(document).ready(function(){
//     $("h1").css("color", "red");
// });

//Manipulating style
// $("h1").css("font-size") //getting the value
// $("h1").css("font-size", "5rem") //setting the value
// $("h1").addClass("big-title margin-50") //adding two classes

//Manipulating Text
// $("button").text("<em>Hey</em>")
//$("button").html("<em>Hey</em>")

//Manipulating attribute
// $("img").attr("src") //getting attribute
// $("a").attr("href", "https://wwwa.yahoo.com")
// $("h1").attr("class") //lists all the classes

//Adding event listeners
// $("h1").click(function(){
//     $("h1").css("color", "pink")
// });

//Example w/o jQuery
// for (var i=0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "blue";
//     })
// };

//with jQuery
// $("button").click(function(){
//     $("h1").css("color", "green");
// })
 

// $("input").keypress(function(event){
//     console.log(event.key)
// })

// $(document).keypress(function(event){
//     $("h1").html(event.key)
// })

// $("h1").on("mouseover", function(){
//     $("h1").css("color", "purple")
// })

// $("h1").on("click", function(){
//     $("h1").css("color", "purple")
// })

//Adding removing elements
// $("h1").before("<button>New</button>")
// $("h1").after("<button>New</button>")
// $("h1").prepend("<button>New</button>")
// $("h1").append("<button>New</button>")
// $("button").remove();

//Animations
// $("h1").on("click", function(){
//     $("h1").hide();
// });

// $("h1").on("click", function(){
//     $("h1").toggle();
// });

// $("h1").on("click", function(){
//     $("h1").fadeOut();
// });

// $("h1").on("click", function(){
//     $("h1").fadeToggle();
// });

// $("h1").on("click", function(){
//     $("h1").slideUp();
// });

// $("h1").on("click", function(){
//     $("h1").animate({opacity: 0.5}); //onlu numeric value
// });

$("h1").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5})
});