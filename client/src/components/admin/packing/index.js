// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import axios from 'axios'



// import './packing_page.scss'


// export default function PackingPage() {
//     const auth = useSelector(state => state.auth)

//     return (
//         <div className="packing_page">
//             <h3>packing area</h3>
//             <div className="data">
//                 <div className="row_1">
//                     <div className="mixer element">
//                         <p>Mixer</p>
//                         <div className="chart">

//                         </div>
//                     </div>
//                     <div className="oee_realtime element">
//                         <p>OEE realtime</p>
//                         <div className="chart">

//                         </div>
//                     </div>
//                     <div className="oee_history element">
//                         <p>OEE history</p>
//                         <div className="chart">

//                         </div>
//                     </div>
//                 </div>
//                 <div className="row_2">
//                     <div className="Quality element">
//                         <p>Quality</p>
//                         <div className="chart">

//                         </div>
//                     </div>
//                     <div className="history_production element">
//                         <p>History production</p>
//                         <div className="chart">

//                         </div>
//                     </div>
//                 </div>


//             </div>
//         </div>
//     )
// }

import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Doughnut, Bar, Line, Pie } from "react-chartjs-2"
import Chart from "react-apexcharts";

import './packing_page.scss'


export default function PackingPage() {
    const auth = useSelector(state => state.auth)
    const dataQuality = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [
            {
                label: 'Successful',
                data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
                backgroundColor: '#1AE2CA',
            },
            {
                label: 'Failure',
                data: [2, 3, 20, 5, 1, 4, 12, 19, 3, 5, 2, 3],
                backgroundColor: '#FF8396',
            }
        ],
    };

    const optionsChartQuality = {
        maintainAspectRatio: false,
        scales: {
            y: {
                stacked: true,
                ticks: {
                    beginAtZero: true,
                    color: '#FFFFFF'
                },
                grid: {
                    color: 'rgba(224,224,224,0.2)',
                    borderColor: '#D0C9D6'
                }
            },
            x: {
                stacked: true,
                ticks: {
                    color: '#FFFFFF'
                },
                grid: {
                    display: false,
                    borderColor: '#D0C9D6'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: "#FFFFFF"
                }
            }
        }
    };

    const dataOEE = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: 'Performance',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgb(26, 226, 202)',
                borderColor: 'rgba(26, 226, 202, 0.2)',
            },
        ],
    };

    const optionsChartOee = {
        maintainAspectRatio: false,
        scales: {
            y: {
                stacked: true,
                ticks: {
                    beginAtZero: true,
                    color: '#FFFFFF'
                },
                grid: {
                    color: 'rgba(224,224,224,0.2)',
                    borderColor: '#D0C9D6'
                }
            },
            x: {
                stacked: true,
                ticks: {
                    color: '#FFFFFF'
                },
                grid: {
                    display: false,
                    borderColor: '#D0C9D6'
                }
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: "#FFFFFF"
                }
            }
        }
    };

    const optionsRadial = {
        plotOptions: {
            radialBar: {
                startAngle: 0,
                endAngle: 540,
                hollow: {
                    margin: 0,
                    size: "70%",
                    background: "transparent",
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: "front",
                    dropShadow: {
                        enabled: false,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24
                    }
                },
                track: {
                    background: "#fff",
                    strokeWidth: "100%",
                    margin: 0, // margin is in pixels
                    dropShadow: {
                        enabled: false,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.35
                    }
                },

                dataLabels: {
                    showOn: "always",
                    name: {
                        offsetY: -20,
                        show: false,
                        color: "#888",
                        fontSize: "13px"
                    },
                    value: {
                        formatter: function (val) {
                            return val + '%';
                        },
                        color: "#FFFFFF",
                        fontSize: "1.5rem",
                        show: true
                    }
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: ["#8056F4", "#183351"],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        stroke: {
            lineCap: "round"
        }
    }
    const seriesRadial = [76]
    return (
        <div className="packing_page">
            <h3>packing area</h3>
            <div className="data">
                <div className="row_1">
                    <div className="mixer element">
                        <p>Mixer</p>
                        <div className="chartMixer">
                            <Chart
                                options={optionsRadial}
                                series={seriesRadial}
                                type="radialBar"
                                width="100%"
                            />
                        </div>
                        <div className="subchartMixer">

                            <span>
                                <img src='/packing_temperature-high-solid.svg' />
                                A red paragraph.
                            </span>

                            <span>
                                <img src='/packing_temperature-high-solid.svg' />
                                A red paragraph.
                            </span>
                        </div>
                    </div>
                    <div className="oee_realtime element">
                        <p>OEE realtime</p>
                        <div className="chart">

                        </div>
                    </div>
                    <div className="oee_history element">
                        <p>OEE history</p>
                        <div className="chartOee">
                            <Line data={dataOEE} options={optionsChartOee} />
                        </div>
                    </div>
                </div>
                <div className="row_2">
                    <div className="Quality element">
                        <p>Quality</p>
                        <div className="chartQuality">
                            <Bar data={dataQuality} options={optionsChartQuality} />
                        </div>
                    </div>
                    <div className="history_production element">
                        <p>History production</p>
                        <div className="historyTable">
                            ABCD
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
