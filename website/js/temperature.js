const temperatureEle = document.getElementById("temperature-chart");

if(temperatureEle) {
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
            categories: ['8am', '9am', '10am', '11am', '12pm', '1pm',
            '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
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
    
    const temperatureUrl = "http://localhost/flood-forecast/website/api.php?action=list&type=temperature"
    
    setInterval(()=>{
    axios.post(temperatureUrl, {})
    .then((response)=> response.data)
    .then((data)=>temperatureChart.updateSeries([
        {
            name: 'Temperature',
            data,
    }.catch((e)=>e.message)
    ]))
    }, 1000)
}