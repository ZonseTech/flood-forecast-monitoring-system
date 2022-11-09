const waterLevelUrl = APP_URL + "/ffhms/list?action=waterLevel"

const waterLevelEle = new Chart(document.getElementById("water-level-chart"), {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            data: [],
            borderWidth: 1,
            borderColor: '#006699',
            backgroundColor: "#006699",
            fill: true,
            label: 'waterLevel',
        }]
    },
    options: {
        responsive: true,
        title: {
            display: false,
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
});

const getDatawaterLevel = function () {
    $.ajax({
        url: waterLevelUrl,
        success: (data) => {
            var today = new Date();
            var time = today.getMinutes() + ":" + today.getSeconds();

            waterLevelEle.data
                .labels
                .push(formatAMPM(new Date));

            waterLevelEle.data
                .datasets[0]
                .data
                .push(data.data);

            waterLevelEle.update();

        }
    });
};

setInterval(getDatawaterLevel, 5000);