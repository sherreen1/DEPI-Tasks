// document.querySelector("#myForm").addEventListener("submit", function (e) {
//     var works = document.querySelector("#works").value;
//     var result = document.querySelector("#result");

//     var li = document.createElement("li");
//     li.innerHTML = works;
//     result.appendChild(li);
//     document.querySelector("#works").value = "";
//     e.preventDefault();
// });

// by value
// document.querySelector("#myForm").addEventListener("submit", function (e) {
//     var works = document.querySelector("#works");
//     var result = document.querySelector("#result");

//     if (works.value.trim() == "") {
//         alert("Please enter value");
//         e.preventDefault();
//         return;
//     }
//     var li = document.createElement("li");
//     li.innerHTML = works.value;
//     result.appendChild(li);
//     works.value = "";
//     e.preventDefault();
// });

// Task_1 To add delete button to each list item
document.querySelector("#myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var works = document.querySelector("#works");
    var result = document.querySelector("#result");

    if (works.value.trim() == "") {
        alert("Please enter value");
        return;
    }

    var li = document.createElement("li");
    li.className = "d-flex justify-content-between my-3";

    var btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.style.backgroundColor = "red";

    btn.onclick = function () {
        li.remove();
    };

    li.textContent = works.value + " ";
    li.appendChild(btn);
    result.appendChild(li);

    works.value = "";
});

// BOM 
// var w = window.innerWidth;
// var h = window.innerHeight;
// document.querySelector("#BOM").innerHTML = "Width: " + w + "px, Height: " + h + "px";
// document.querySelector("#BOM").style.width = w-200 + "px";
// document.querySelector("#BOM").style.backgroundColor = "lightblue";

// ================================
// Task2 scrollly Navbar


var navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    var scrollValue = window.scrollY;

    if (scrollValue > 200) {
        navbar.classList.replace("bg-danger", "bg-primary");
    } else {
        navbar.classList.replace("bg-primary", "bg-danger");
    }

});


//======================================================

// Location :

// document.querySelector("#ali").addEventListener("click", function(){
//     window.location.href = "https://www.google.com/";
// })

// document.querySelector("#demo").innerHTML = window.location.href;
// document.querySelector("#demo").innerHTML = window.location.protocol;
// document.querySelector("#demo").innerHTML = window.location.hostname;
// document.querySelector("#demo").innerHTML = window.location.port;
// document.querySelector("#demo").innerHTML = window.location.pathname;

// ===============================================
// document.querySelector("#demo").innerHTML =  navigator.appVersion ;
// document.querySelector("#demo").innerHTML =  navigator.platform ;
// document.querySelector("#demo").innerHTML =  navigator.appName ;
// document.querySelector("#demo").innerHTML =  navigator.cookieEnabled ;
// document.querySelector("#demo").innerHTML =  navigator.javaEnabled() ;

// ==============================================
// var mouse = setInterval(myTimer, 1000);
// function myTimer() {
//     var d = new Date();
//     document.querySelector("#Timer").innerHTML = d;
// }

// function setDate() {

// }

// task 3 setInterval && setTimeout

var time = 25 * 60;
var timer;

var display = document.querySelector("#timer");
var statusText = document.querySelector("#status");

// Update time on screen
function updateDisplay() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    display.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

// Start timer
function startTimer() {
    clearInterval(timer);

    statusText.textContent = "Focus on your study!";

    timer = setInterval(function () {
        if (time > 0) {
            time--;
            updateDisplay();
        } else {
            clearInterval(timer);
            statusText.textContent = "Time's Up!";

            setTimeout(function () {
                alert("Great job! Take a 5-minute break.");
            }, 1000);
        }
    }, 1000);
}

// Pause timer
function pauseTimer() {
    clearInterval(timer);
    statusText.textContent = "Timer Paused";
}

// Reset timer
function resetTimer() {
    clearInterval(timer);
    time = 25 * 60;
    updateDisplay();
    statusText.textContent = "Ready to study?";
}

updateDisplay();
