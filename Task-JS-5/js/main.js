// DOM ===> Document Object Model 

// var x = document.getElementsByClassName("demo");
// x.style.color = "red";  //Error 
// console.log(x);
// for(var i =0 ; i<x.length ; i++){
//    x[i].style.color= "red";
// }
 
// var x = document.getElementsByTagName("h2");
// for(var i =0 ; i<x.length ; i++){
//    x[i].style.color= "yellow";
// }
// console.log(x);

// querySelector
// querySelectorAll

// var x = document.querySelector(".demo");
// var x = document.querySelector(".demo:nth-of-type(2)");
// x.style.color = "red";  //element 2
// console.log(x);  //first Element

// var x = document.querySelectorAll(".demo");
// console.log(x);

// var x = document.querySelectorAll("h2");
// x[1].style.color = "red"; 

// ======================================
// ParentNode && ParentElement
// var x= document.querySelector("#demo");
// console.log(x.parentElement.parentElement);
// =======================================
// Children
// var x= document.querySelector("#demo");
// console.log(x.children);

// var x= document.querySelector("#demo").children;
// x[0].style.color = "red";
// =======================================

// SetAttribute
// GetAttribute

// var x = document.querySelector("#user").getAttribute("placeholder");
// document.querySelector("#user").setAttribute("placeholder",x);
// console.log(x);

// =======================================
// event
// document.querySelector("#btn").onclick = function() {
//     console.log("Button clicked");
//     console.log(123);
// }

// document.querySelector("#btn").onclick = getData;
// function getData() {
//     console.log("Button clicked");
//     console.log(123);
// }

// ======================================
// addEventListener
// document.querySelector("#btn").addEventListener("click",getData);
// function getData() {
//     console.log("Button clicked");
//     console.log(123);
// }

// onclick , click , mouseenter , mouseleave , change , keydown , keyup

// document.querySelector("#demo").addEventListener("change",getData);
// function getData(event) {
//     console.log(event.target.value);
// }

// document.querySelector("#form").addEventListener("submit",getData);
// function getData(event) { 
//     console.log(123);
//     event.preventDefault();
// }

// =====================================

// var newElement = document.createElement("h4");
// newElement.setAttribute("class","demo");
// newElement.id = "demo";
// newElement.className="Shrien";
// newElement.innerHTML = "Hello World";
// document.body.appendChild(newElement);
// var x = document.querySelector("#demo");
// x.insertBefore(newElement, x.children[0]);
// =====================================


// Task 
// document.querySelector("#red").onclick = function() {
//     document.querySelector("#demo").style.color = "red";
// }

// document.querySelector("#blue").onclick = function() {
//     document.querySelector("#demo").style.color = "blue";
// }
// document.querySelector("#yellow").onclick = function() {
//     document.querySelector("#demo").style.color = "yellow";
// }


// document.querySelectorAll("button").forEach(function(item) {
//     item.onclick = function() {
//         document.querySelector("#demo").style.color = item.innerHTML;
//     };
// });

// document.querySelectorAll("button").forEach(function(item) {
//     item.onclick = function() {
//         document.querySelector("#demo").style.color = item.id;
//     };
// });

document.querySelectorAll("button").forEach(function(item) {
    item.onclick = function(e) {
        document.querySelector("#demo2").style.color = e.target.dataset.color;
        document.querySelector("#demo2").style.textAlign = e.target.dataset.location;
    }
});
