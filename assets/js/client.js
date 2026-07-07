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

const tbody = document.getElementById("clientTableBody");

const clients = JSON.parse(localStorage.getItem("clients")) || [];

clients.forEach((client, index) => {
    tbody.innerHTML += `
        <tr class="border-b hover:bg-gray-100">
            <td class="p-4">${client.id}</td>
            <td class="p-4">${client.fullName}</td>
            <td class="p-4">${client.phone}</td>
            <td class="p-4">${client.email}</td>
            <td class="p-4 text-center">
                <button class="bg-blue-600 text-white px-3 py-1 rounded" onClick="editClient(${index})">
                    Edit
                </button>
                <button class="bg-red-600 text-white px-3 py-1 rounded" onClick="deleteClient(${index})">
                    Delete
                </button>
            </td>
        </tr>`;
});

function deleteClient(index){
    if (confirm("Delete this client?")){
        clients.splice(index, 1);
        localStorage.setItem("clients",JSON.stringify(clients));
        location.reload();
    }
}

function editClient(index){
    localStorage.setItem("editClientIndex", index);
    window.location.href = "AddClient.html";
}