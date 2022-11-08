const waterLevelEle = document.getElementById("water-level-chart");

if (waterLevelEle) {
    var waterLevelChart = Highcharts.chart("water-level-chart", {
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
                text: 'Level in metres'
            },
            labels: {
                formatter: function () {
                    return this.value + 'm';
                }
            }
        },
        plotOptions: {
            area: {
                pointStart: 0,
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
        series: [],
        // {
        //     name: 'Water Level',
        //     data: [
        //         253, 255, 257, 230, 220, 200, 210, 250, 260, 230, 240, 250
        //     ]
        //     },
    });

    const waterLevelUrl = APP_URL + "/api/ffhms/list"


    setInterval(() => {
        axios.post(waterLevelUrl, {
            action: "waterLevel"
        }).then((response) => response.data)
            .then((data) => waterLevelChart.updateSeries([
                {
                    name: 'Water Level',
                    data,
                }.catch((e) => e.message)
            ]))
    }, 1000)
}