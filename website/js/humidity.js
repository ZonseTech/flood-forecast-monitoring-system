const humidityUrl = APP_URL + "/ffhms/list?action=humidity"

const humidityEle = new Chart(document.getElementById("humidity-chart"), {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      data: [],
      borderWidth: 1,
      borderColor: '#006699',
      label: 'humidity',
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

const getDataHumidity = function () {
  $.ajax({
    url: humidityUrl,
    success: (data) => {
      var today = new Date();
      var time = today.getMinutes() + ":" + today.getSeconds();

      humidityEle.data
        .labels
        .push(formatAMPM(new Date));

      temperatureEle.data
        .datasets[0]
        .data
        .push(data.data);

      temperatureEle.update();

    }
  });
};

setInterval(getDataTemperature, 5000);