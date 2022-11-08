const temperatureEle = document.getElementById("temperature-chart");

$(document).ready(function () {
  var temperatureEle = {
    type: 'spline',
    animation: Highcharts.svg, // don't animate in IE < IE 10.
    marginRight: 10,

    events: {
      load: function () {
        // set up the updating of the chart each second
        var series = this.series[0];

        setInterval(function () {
          var x = (new Date()).getTime(), // current time
            y = Math.random();
          series.addPoint([x, y], true, true);
        }, 8000);
      }
    }
  };
  var title = {
    text: 'Live random data'
  };
  var xAxis = {
    type: 'datetime',
    tickPixelInterval: 150
  };
  var yAxis = {
    title: {
      text: 'Value'
    },
    plotLines: [{
      value: 0,
      width: 1,
      color: '#808080'
    }]
  };
  var tooltip = {
    formatter: function () {
      return '<b>' + this.series.name + '</b><br/>' +
        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
        Highcharts.numberFormat(this.y, 2);
    }
  };
  var plotOptions = {
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
  };
  var legend = {
    enabled: false
  };
  var exporting = {
    enabled: false
  };
  var series = [{
    name: 'Random data',
    data: (function () {
      // generate an array of random data
      var data = [], time = (new Date()).getTime(), i = 1, temperature = 0;

      axios.get(temperatureUrl)
        .then((response) => response.data)
        .then((result) => temperature = result.data.value)

      data.push({
        x: time * 1000,
        y: temperature
      });

      return data;
    }())
  }];

  var json = {};
  json.chart = temperatureEle;
  json.title = title;
  json.tooltip = tooltip;
  json.xAxis = xAxis;
  json.yAxis = yAxis;
  json.legend = legend;
  json.exporting = exporting;
  json.series = series;
  json.plotOptions = plotOptions;

  Highcharts.setOptions({
    global: {
      useUTC: false
    }
  });

  $('#temperature-chart').highcharts(json);
});

/* if (temperatureEle) {
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
    
  }, 5000)
} */