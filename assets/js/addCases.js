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

let cases = JSON.parse(localStorage.getItem("cases")) || [];

const clientSelect = document.getElementById("clientName");

const clients = JSON.parse(localStorage.getItem("clients")) || [];

clients.forEach(client => {
    clientSelect.innerHTML += `
        <option value="${client.fullName}">
            ${client.fullName}
        </option>
    `;
});

const editIndex = localStorage.getItem("editCaseIndex");

const form = document.getElementById("caseForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let cases = JSON.parse(localStorage.getItem("cases")) || [];

    const clientName = document.getElementById("clientName").value;
    const caseType = document.getElementById("caseType").value;

    if (clientName === "Select Client") {
        alert("Please select a client");
        return;
    }

    if (caseType === "Select Type") {
        alert("Please select case type");
        return;
    }

    const caseData = {
        id: editIndex !== null ? cases[editIndex].id : "C" + String(cases.length + 1).padStart(3, "0"),
        clientName,
        caseTitle: document.getElementById("caseTitle").value,
        caseType,
        courtName: document.getElementById("court").value,
        filingDate: document.getElementById("filing").value,
        nextHearing: document.getElementById("hearing").value,
        status: document.getElementById("status").value,
        description: document.getElementById("description").value
    };

    if (editIndex !== null) {
        cases[editIndex] = caseData;
        localStorage.removeItem("editCaseIndex");
        alert("Case Updated Successfully");
    } else {
        cases.push(caseData);
        alert("Case Added Successfully");
    }
    localStorage.setItem("cases", JSON.stringify(cases));
    window.location.href = "Cases.html";
})

if (editIndex !== null) {
    const cases = JSON.parse(localStorage.getItem("cases"));
    const caseData = cases[editIndex];
    document.getElementById("caseId").value = caseData.id;
    document.getElementById("clientName").value = caseData.clientName;
    document.getElementById("caseTitle").value = caseData.caseTitle;
    document.getElementById("caseType").value = caseData.caseType;
    document.getElementById("court").value = caseData.courtName;
    document.getElementById("filing").value = caseData.filingDate;
    document.getElementById("hearing").value = caseData.nextHearing;
    document.getElementById("status").value = caseData.status;
    document.getElementById("description").value = caseData.description;
}
