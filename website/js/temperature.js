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
    axios.get(temperatureUrl)
      .then((response) => response.data)
      .then((result) => {
        console.log(result);

        $cat = []
        $data = []


        if (result.data.length) {
          result.data.map(($value, key) => {
            console.log($value);

            $data.push($value.details)
            $cat.push($value.created_at)
          })

          console.log($data);

          temperatureChart.update({
            series: [
              {
                name: 'Temperature',
                data: $data,
              }
            ],
            xAxis: {
              categories: $cat,
            }
          })
        }
      })
  }, 5000)
}