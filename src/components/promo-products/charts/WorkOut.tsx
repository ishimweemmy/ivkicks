import ApexCharts from 'apexcharts';
import React from 'react'

const WorkOut = () => {
    let options = {
        chart: {
            height: 280,
            type: "radialBar"
        },

        series: [67],

        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 15,
                    size: "70%"
                },

                dataLabels: {
                    showOn: "always",
                    name: {
                        offsetY: -10,
                        show: true,
                        color: "#888",
                        fontSize: "13px"
                    },
                    value: {
                        color: "#111",
                        fontSize: "30px",
                        show: true
                    }
                }
            }
        },

        stroke: {
            lineCap: "round",
        },
        labels: ["Progress"]
    };

    let chart = new ApexCharts(document.querySelector(".chart"), options);

    chart.render();

    return (
        <div className='chart'></div>
    )
}

export default WorkOut;
