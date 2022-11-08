const temperatureEle = document.getElementById("temperature-chart");

if (temperatureEle) {
  var temperatureChart = Highcharts.chart("temperature-chart", {
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
        text: 'Degrees Celcius'
      },
      labels: {
        formatter: function () {
          return this.value + '°';
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

  const temperatureUrl = APP_URL + "/ffhms/list?action=temperature"

  setInterval(() => {
    axios.get(temperatureUrl, {

    })
      .then((response) => response.data)
      .then((data) => temperatureChart.updateSeries([
        {
          name: 'Temperature',
          data,
        }.catch((e) => e.message)
      ]))
  }, 5000)
}