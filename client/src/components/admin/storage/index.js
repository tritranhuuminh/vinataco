import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Line } from "react-chartjs-2"
import Chart from "react-apexcharts";

import './storage_page.scss'


export default function StoragePage() {
    const auth = useSelector(state => state.auth)
    const optionsRadial = {
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                    margin: 0,
                    size: "70%",
                    background: "#fff",
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: "front",
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24
                    }
                },
                track: {
                    background: "#fff",
                    strokeWidth: "67%",
                    margin: 0, // margin is in pixels
                    dropShadow: {
                        enabled: true,
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
                        show: true,
                        color: "#888",
                        fontSize: "13px"
                    },
                    value: {
                        formatter: function (val) {
                            return val;
                        },
                        color: "#111",
                        fontSize: "30px",
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
                gradientToColors: ["#ABE5A1"],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        stroke: {
            lineCap: "round"
        },
        labels: ["Percent"]
    }
    const seriesRadial = [76]

    const dataOEE = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: 'Temperature 1',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgb(26, 226, 202)',
                borderColor: 'rgba(26, 226, 202, 0.2)',
            },
            {
                label: 'Temperature 2',
                data: [22, 12, 13, 25, 12, 33],
                backgroundColor: 'rgb(255, 131, 150)',
                borderColor: 'rgba(255, 131, 150, 0.2)',
            }
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
    return (
        <div className="storage_page">
            <h3>storage area</h3>
            <div className="data">
                <div className="mixer element">
                    <p>Total</p>
                    <div className="chart">

                    </div>
                </div>
                <div className="user_space element">
                    <p>User space</p>
                    <div className="chart">
                        <Chart
                            options={optionsRadial}
                            series={seriesRadial}
                            type="radialBar"
                            width="280"
                        />
                        <Chart
                            options={optionsRadial}
                            series={seriesRadial}
                            type="radialBar"
                            width="280"
                        />
                    </div>
                </div>
                <div className="temperature element">
                    <p>Temperature</p>
                    <div className="chart">
                        <Line data={dataOEE} options={optionsChartOee} />
                    </div>
                </div>
                <div className="history_production element">
                    <p>History production</p>
                    <div className="chart">

                    </div>
                </div>
            </div>
        </div>
    )
}
