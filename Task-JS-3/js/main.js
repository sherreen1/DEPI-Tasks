function validateData() {
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var result = document.getElementById("result");
 
    // result.classList ="alert theme-danger d-block text-center";
    // result.classList.add("alert", "theme-danger", "d-block", "text-center");
    result.setAttribute("class", "alert theme-danger d-block text-center");
    
    if (user === "" && email === "" && pass === "" && confirm === "") {
        result.innerHTML = "All fields are required.";
        return false;
    } else if (user.length < 5 || user.length > 20) {
        result.innerHTML = "Username must be 5–20 characters.";
        return false;
    } else if (email.indexOf("@", 1) == -1 || email.indexOf(".com", 5) == -1) {
        result.innerHTML = "Enter a valid email address.";
        return false;
    } else if (pass.length < 8) {
        result.innerHTML = "Password must be 8+ characters.";
        return false;
    } else if (pass != confirm) {
        result.innerHTML = "Passwords don't match.";
        return false;
    }
}