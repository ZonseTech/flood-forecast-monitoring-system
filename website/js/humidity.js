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
      categories: [],
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

  const humidityUrl = APP_URL + "/ffhms/list"

  setInterval(() => {
    axios.post(humidityUrl, {
      action: "humidity"
    })
      .then((response) => response.data)
      .then((data) => humidityChart.updateSeries([
        {
          name: 'Humidity',
          data,
        }.catch((e) => e.message)
      ]))
  }, 1000)
}