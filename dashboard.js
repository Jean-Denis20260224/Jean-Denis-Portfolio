// Export Shipments

new Chart(
document.getElementById("shipmentsChart"),
{
    type: "bar",
    data: {
        labels: [
            "Australia",
            "New Zealand",
            "USA",
            "Fiji",
            "France"
        ],
        datasets: [{
            label: "Shipments",
            data: [14, 10, 8, 5, 3],
            backgroundColor: "#0284c7"
        }]
    }
});

// Countries Served

new Chart(
document.getElementById("countriesChart"),
{
    type: "doughnut",
    data: {
        labels: [
            "Australia",
            "New Zealand",
            "USA",
            "France",
            "Fiji",
            "Others"
        ],
        datasets: [{
            data: [30, 20, 15, 10, 10, 15],
            backgroundColor: [
                "#0284c7",
                "#38bdf8",
                "#7dd3fc",
                "#0ea5e9",
                "#0369a1",
                "#94a3b8"
            ]
        }]
    }
});

// Monthly Export Volume

new Chart(
document.getElementById("monthlyChart"),
{
    type: "line",
    data: {
        labels: [
            "Jan","Feb","Mar",
            "Apr","May","Jun",
            "Jul","Aug","Sep",
            "Oct","Nov","Dec"
        ],
        datasets: [{
            label: "Kilograms Exported",
            data: [
                1500,1800,2200,
                2100,2450,2600,
                2400,2800,3100,
                2900,3400,3600
            ],
            borderColor: "#0284c7",
            backgroundColor: "#38bdf8",
            fill: true
        }]
    }
});

// Professional Skills

new Chart(
document.getElementById("skillsChart"),
{
    type: "radar",
    data: {
        labels: [
            "Customs",
            "Logistics",
            "Documentation",
            "Freight",
            "Operations",
            "Planning"
        ],
        datasets: [{
            label: "Competency Level",
            data: [95, 90, 96, 88, 91, 85],
            backgroundColor: "rgba(2,132,199,0.2)",
            borderColor: "#0284c7"
        }]
    }
});