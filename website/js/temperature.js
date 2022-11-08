const temperatureUrl = APP_URL + "/ffhms/list?action=temperature"

const ctx_live = document.getElementById("temperature-chart");
const temperatureEle = new Chart(ctx_live, {
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

const getData = function () {
  $.ajax({
    url: temperatureUrl,
    success: (data) => {
      time = (new Date()).getTime()

      temperatureEle.data
        .labels
        .push(time);

      temperatureEle.data
        .datasets[0]
        .data
        .push(data.data);

      temperatureEle.update();

    }
  });
};

setInterval(getData, 5000);