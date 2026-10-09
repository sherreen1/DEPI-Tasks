document.getElementById("convertForm").onsubmit = function(event) {
    event.preventDefault();

    var doller = document.getElementById("doller").value;
    var result = document.getElementById("result");

    if (doller == "") {
        result.innerHTML = "Please enter a value.";
    } else if (isNaN(doller)) {
        result.innerHTML = "Please enter a valid number.";
    } else if (doller < 0) {
        result.innerHTML = "Please enter a positive number.";
    } else if (doller == 0) {
        result.innerHTML = "Please enter a number other than 0.";
    } else {
        var convertedValue = doller * 50;
        result.innerHTML = "The result is: " + convertedValue + " EGP";
    }
};