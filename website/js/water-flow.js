const waterFlowEle = document.getElementById("water-flow-chart");

console.log(waterFlowEle);

if (waterFlowEle) {
  var waterFlowChart = Highcharts.chart("water-flow-chart", {
    chart: {
      type: 'area',
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {

      title: {
        text: 'Time (Hrs)'
      },

      allowDecimals: false,
      labels: {
        formatter: function () {
          return this.value; // clean, unformatted number for year
        }
      },
    },
    yAxis: {
      title: {
        text: 'Speed'
      },
      labels: {
        formatter: function () {
          return this.value + 'm';
        }
      }
    },
    plotOptions: {
      area: {
        pointStart: 1940,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: []
  });

  const waterFlowUrl = APP_URL + "/ffhms/list?action=waterFlow"

  setInterval(() => {
    axios.get(waterFlowUrl, {

    })
      .then((response) => response.data)
      .then((data) => waterFlowChart.updateSeries([
        {
          name: 'Flow Rate',
          data,
        }.catch((e) => e.message)
      ]))
  }, 5000)
}