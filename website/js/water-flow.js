const waterFlowUrl = APP_URL + "/ffhms/list?action=waterFlow"

const waterFlowEle = new Chart(document.getElementById("water-flow-chart"), {
  type: 'area',
  data: {
    labels: [],
    datasets: [{
      data: [],
      borderWidth: 1,
      borderColor: '#006699',
      label: 'waterFlow',
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

const getDatawaterFlow = function () {
  $.ajax({
    url: waterFlowUrl,
    success: (data) => {
      var today = new Date();
      var time = today.getMinutes() + ":" + today.getSeconds();

      waterFlowEle.data
        .labels
        .push(formatAMPM(new Date));

      waterFlowEle.data
        .datasets[0]
        .data
        .push(data.data);

      waterFlowEle.update();

    }
  });
};

setInterval(getDatawaterFlow, 5000);