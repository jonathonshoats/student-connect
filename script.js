function submitReport() {
    var title = document.getElementById("title").value;
    var category = document.getElementById("category").value;
    var description = document.getElementById("description").value;

    if (title.trim() === "") {
        alert("Please enter a title.");
        return;
    }

    var reports =
        JSON.parse(localStorage.getItem("reports")) || [];

    reports.push({
        title: title,
        category: category,
        description: description,
        status: "Open"
    });

    localStorage.setItem(
        "reports",
        JSON.stringify(reports)
    );

    loadReports();

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}

function loadReports() {
    var reportList =
        document.getElementById("reportList");

    if (!reportList) {
        return;
    }

    var reports =
        JSON.parse(localStorage.getItem("reports")) || [];

    reportList.innerHTML = "";

    reports.forEach(function(report) {
        reportList.innerHTML += `
            <div class="card">
                <h3>${report.title}</h3>
                <p><strong>Category:</strong> ${report.category}</p>
                <p>${report.description}</p>
                <p><strong>Status:</strong> ${report.status}</p>
            </div>
        `;
    });
}

window.onload = loadReports;
