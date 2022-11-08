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

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = minutes + ':' + hours + ' ' + ampm;
  return strTime;
}

setInterval(getData, 5000);