const humidityEle = document.getElementById("humidity-chart");

if(humidityEle) {
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
        series: [{
          name: 'Humidity',
          data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, 22.8, 17.5, 12.1, 7.6]
      
        }]
      });
    
    const humidityUrl = "http://127.0.0.1/api/humidity.php"
    
    setInterval(()=>{
    axios.post(humidityUrl, {})
    .then((response)=> response.data)
    .then((data)=>humidityChart.updateSeries([
        {
            name: 'Humidity',
            data,
    }.catch((e)=>e.message)
    ]))
    }, 1000)
}