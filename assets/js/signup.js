const signupform = document.getElementById("signupform");

signupform.addEventListener("submit", function (e) {

    e.preventDefault();

    const fullName = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (fullName === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
        alert("Please fill all the details.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (password.length < 6 || password.length > 12) {
        alert("Password must be between 6 and 12 characters.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExist = users.find(user => user.email === email);

    if (alreadyExist) {
        alert("Email is already registered.");
        return;
    }

    const user = {
        fullName,
        email,
        phone,
        password
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account Created Successfully!");

    signupform.reset();

    window.location.href = "../Login.html";

});

const googleLoginButton = document.getElementById("googleLoginButton");

googleLoginButton.addEventListener("click", function () {

    alert("Google Login is currently unavailable. Please sign up using the registration form.");

});

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "⌣";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "👁";
    }
});