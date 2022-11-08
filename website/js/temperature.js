const temperatureUrl = APP_URL + "/ffhms/list?action=temperature"

const temperatureEle = new Chart(document.getElementById("temperature-chart"), {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      data: [],
      borderWidth: 1,
      borderColor: '#006699',
      label: 'Temperature',
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

const getDataTemperature = function () {
  $.ajax({
    url: temperatureUrl,
    success: (data) => {
      var today = new Date();
      var time = today.getMinutes() + ":" + today.getSeconds();

      temperatureEle.data
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