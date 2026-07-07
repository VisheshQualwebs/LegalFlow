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

const tbody = document.getElementById("caseTableBody");

const cases = JSON.parse(localStorage.getItem("cases")) || [];

cases.forEach((caseItem, index) => {

    tbody.innerHTML += `
        <tr class="border-b">
            <td class="p-4">${caseItem.id}</td>
            <td class="p-4">${caseItem.clientName}</td>
            <td class="p-4">${caseItem.caseType}</td>
            <td class="p-4">${caseItem.courtName}</td>
            <td class="p-4">${caseItem.nextHearing}</td>
            <td class="p-4">${caseItem.status}</td>
            <td class="p-4 text-center">
                <button
                    onclick="editCase(${index})"
                    class="bg-blue-600 text-white px-3 py-1 rounded">
                    Edit
                </button>
                <button
                    onclick="deleteCase(${index})"
                    class="bg-red-600 text-white px-3 py-1 rounded">
                    Delete
                </button>
            </td>
        </tr>`
    ;
});

function deleteCase(index) {
    if(confirm("Are you sure, want to delete this case?")){
        cases.splice(index, 1);
        localStorage.setItem("cases", JSON.stringify(cases));
        location.reload();
    }
}

function editCase(index) {
    localStorage.setItem("editCaseIndex", index);
    window.location.href = "../Pages/AddCase.html"
}