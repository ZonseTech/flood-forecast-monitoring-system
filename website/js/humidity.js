const humidityEle = document.getElementById("humidity-chart");

if (humidityEle) {
  var humidityChart = Highcharts.chart("humidity-chart", {
    chart: {
      type: 'spline'
    },
    title: {
      text: ''
    },
    xAxis: {
      title: {
        text: 'Time (Hrs)'
      },
      categories: ['8am', '9am', '10am', '11am', '12pm', '1pm',
        '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    },
    yAxis: {
      title: {
        text: 'Percentage'
      },
      labels: {
        formatter: function () {
          return this.value + '%';
        }
      }
    },
    tooltip: {
      crosshairs: true,
      shared: true
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 4,
          lineColor: '#666666',
          lineWidth: 1
        }
      }
    },
    series: []
  });

  const humidityUrl = APP_URL + "/api.php?action=list&type=humidity"

  setInterval(() => {
    axios.post(humidityUrl, {})
      .then((response) => response.data)
      .then((data) => humidityChart.updateSeries([
        {
          name: 'Humidity',
          data,
        }.catch((e) => e.message)
      ]))
  }, 1000)
}