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

const form = document.getElementById("clientForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let clients = JSON.parse(localStorage.getItem("clients")) || [];

    const client = {
        id: "CL" + String(clients.length + 1).padStart(3, "0"),
        fullName: document.getElementById("fullName").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        occupation: document.getElementById("occupation").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        pinCode: document.getElementById("pinCode").value,
        gender: document.getElementById("gender").value
    };

    if (editIndex !== null) {
        clients[editIndex] = client;
        localStorage.removeItem("editClientIndex");
        alert("Client Updated Successfully");
    } else {
        clients.push(client);
        alert("Client Added Successfully");
    }
    localStorage.setItem("clients", JSON.stringify(clients));
    window.location.href = "../Pages/Clients.html";
})

const editIndex = localStorage.getItem("editClientIndex");

if (editIndex !== null) {
    let clients = JSON.parse(localStorage.getItem("clients"));
    const client = clients[editIndex];
    document.getElementById("fullName").value = client.fullName;
    document.getElementById("phone").value = client.phone;
    document.getElementById("email").value = client.email;
    document.getElementById("occupation").value = client.occupation;
    document.getElementById("address").value = client.address;
    document.getElementById("city").value = client.city;
    document.getElementById("state").value = client.state;
    document.getElementById("pinCode").value = client.pinCode;
    document.getElementById("gender").value = client.gender;
}