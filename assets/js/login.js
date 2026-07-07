const form = document.getElementById("loginform");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "dev@qualwebs.co" && password === "dev@1234") {
        const developer = {
            fullName: "Developer"
        };
        localStorage.setItem("loggedInUser", JSON.stringify(developer));
        alert("Developer Login Successful!");
        window.location.href = "Pages/Home.html";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(user =>
        user.email === email && user.password === password
    );

    if (foundUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
        alert("Login Successful!");
        window.location.href = "Pages/Home.html";
    } else {
        alert("Invalid Email or Password.");
    }

});

const googleLoginButton = document.getElementById("googleLoginButton");

googleLoginButton.addEventListener("click", function () {
    alert("Google Login is currently unavailable. Please sign up using the registration form.");
});

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "⌣";
    } else {
        password.type = "password";
        togglePassword.textContent = "👁";
    }
});