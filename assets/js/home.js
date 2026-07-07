const logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", function (e) {
    e.preventDefault();

    const confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {
        localStorage.removeItem("loggedInUser");
        alert("logout Successfully");
        window.location.href = "../Login.html";
    }
});

const welcomeText = document.getElementById("welcomeText");

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (loggedInUser) {
    welcomeText.textContent = `Welcome, ${loggedInUser.fullName} 👋`;
} else {
    welcomeText.textContent = `Welcome, Guest 👋`;
}