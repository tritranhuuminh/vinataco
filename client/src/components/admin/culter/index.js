import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Doughnut, Bar, Line, Pie } from "react-chartjs-2"
import axios from 'axios'

import './culter_page.scss'


export default function CulterPage() {
    const auth = useSelector(state => state.auth)
    const tank = [300, 275];
    const dataWeights = {
        labels: [`Tank 1: ${tank[0]} l`, `Tank 2: ${tank[1]} l`],
        datasets: [{
            backgroundColor: ["#1AE2CA", "#FF8396"],
            data: tank,
            borderWidth: 0.1,
            hoverBorderWidth: 2,
            hoverBorderColor: '#fff',
        }]
    }
    const optionsWeights = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
                titleColor: "#fff",
                bodyColor: "#fff"
            },
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    font: {
                        size: 15
                    },
                    color: "white"
                }
            }
        }
    }

    const temp = [31, 30]
    const dataTemp = {
        labels: ["50"],
        datasets: [
            {
                label: "Temp 1",
                backgroundColor: "#FF8396",
                data: [temp[0]]
            }, {
                label: "Temp 2",
                backgroundColor: "#1AE2CA",
                data: [temp[1]]
            }
        ]
    }
    const optionsTemp = {
        maintainAspectRatio: false,
        scales:
        {
            y: {
                type: 'linear',
                grace: '100%',
                display: false,
                offset: true,
                max: 40,
                min: 0,
                ticks: {
                    stepSize: 1
                }
            },

            x: {
                type: 'linear',
                grace: '100%',
                display: false,
                offset: true
            },
        },

        plugins: {
            legend: false,
            title: {
                display: true,
                text: 'Temperature',
                color: "white",
                position: "bottom",
                font: {
                    size: 14
                }
            },
        }
    }
    const concentration = [95, 78]
    const dataCon = {
        labels: ["50"],
        datasets: [
            {
                label: "Con 1",
                backgroundColor: "#FF8396",
                data: [concentration[0]]
            }, {
                label: "Con 2",
                backgroundColor: "#1AE2CA",
                data: [concentration[1]]
            }
        ]
    }
    const optionsCon = {
        maintainAspectRatio: false,
        scales:
        {
            y: {
                type: 'linear',
                grace: '100%',
                display: false,
                offset: true,
                max: 100,
                min: 0,
                ticks: {
                    stepSize: 1
                }
            },

            x: {
                type: 'linear',
                grace: '50%',
                display: false,
                offset: true
            },
        },

        plugins: {
            legend: false,
            title: {
                display: true,
                text: 'Concentration',
                color: "white",
                position: "bottom",
                font: {
                    size: 14
                }
            },
        }
    }
    const weights = [300, 450]
    const dataWeight = {
        labels: ["50"],
        datasets: [
            {
                label: "Weight 1",
                backgroundColor: "#FF8396",
                data: [weights[0]]
            }, {
                label: "Weight 2",
                backgroundColor: "#1AE2CA",
                data: [weights[1]]
            }
        ]
    }
    const optionsWeight = {
        maintainAspectRatio: false,
        scales:
        {
            y: {
                type: 'linear',
                grace: '100%',
                display: false,
                offset: true,
                max: 500,
                min: 0,
                ticks: {
                    stepSize: 10
                }
            },

            x: {
                type: 'linear',
                grace: '50%',
                display: false,
                offset: true
            },
        },

        plugins: {
            legend: false,
            title: {
                display: true,
                text: 'Weights',
                color: "white",
                position: "bottom",
                font: {
                    size: 14
                }
            },
        }
    }
    return (
        <div className="culter_page">
            <h3>culter area</h3>
            <div className="data">
                <div className="weights element">
                    <p>Weights</p>
                    <div className="chart">
                        <Pie
                            data={dataWeights}
                            options={optionsWeights}
                        />
                    </div>
                </div>
                <div className="parameters element">
                    <p>Parameters</p>
                    <div className="chart">
                        <div>
                            <Bar
                                data={dataTemp}
                                options={optionsTemp}
                            />
                        </div>
                        <div>
                            <Bar
                                data={dataCon}
                                options={optionsCon}
                            />
                        </div>

                        <div>
                            <Bar
                                data={dataWeight}
                                options={optionsWeight}
                            />
                        </div>

                    </div>
                </div>
                <div className="quantity element">
                    <p>Quantity</p>
                    <div className="chart">
                        <Line
                            data={{
                                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                                datasets: [
                                    {
                                        label: "First dataset",
                                        data: [33, 53, 85, 41, 44, 65],
                                        fill: true,
                                        backgroundColor: "rgba(75,192,192,0.2)",
                                        borderColor: "rgba(75,192,192,1)",
                                        tension: 0.3
                                    },
                                    {
                                        label: "Second dataset",
                                        data: [33, 25, 35, 51, 54, 76],
                                        fill: true,
                                        backgroundColor: "#a9585870",
                                        borderColor: "#d55959ab",
                                        tension: 0.3
                                    }
                                ]
                            }}
                            options={{
                                elements: {
                                    line: {
                                        borderWidth: 3
                                    }
                                },
                            }}
                        />
                    </div>
                </div>
                <div className="quality element">
                    <p>Quality</p>
                    <div className="chart">
                    <Bar
                    data={{
                        labels: ["2015-01", "2015-02", "2015-03", "2015-04", "2015-05", "2015-06", "2015-07", "2015-08", "2015-09", "2015-10", "2015-11", "2015-12"],
                        datasets: [
                            {
                                backgroundColor: "#008FFB",
                                data: [12, 19, 30, 50, 20, 30, 100, 30, 50, 60, 20, 10],
                                borderRadius: 10,
                                borderWidth: 2,
                                borderColor: "#77c4fff5",
                                barPercentage: 0.6,

                            }
                        ]
                    }}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        plugins: {
                            tooltip: {
                                enabled: true,
                                titleColor: "#fff",
                                bodyColor: "#fff"
                            },
                            legend: {
                                display: false
                            }
                        },
                         scales: {
                             y: {
                                max: 100,
                                min: 0,
                                ticks: {
                                    stepSize: 20,
                                    color: "white"
                                }
                             },
                             x: {
                                //  display: false
                                ticks: {
                                    color: "white"
                                },
                                grid: {
                                    display: false
                                }
                             }
                         }
                    }}
                />
                    </div>
                </div>
                <div className="history_production element">
                    <p>History production</p>
                    <div className="chart">
                    <table>
                <thead>
                    <tr>
                        <th className="id">ID</th>
                        <th className="time">Time</th>
                        <th className="quantity">Quantity</th>
                        <th className="performance">Performance</th>
                        <th className="code">Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="tr1">
                        <td className="id">1</td>
                        <td className="time">2020-05-06 12:50:01</td>
                        <td className="quantity">2000</td>
                        <td className="performance">Good</td>
                        <td className="code">12341235213</td>
                    </tr>
                    <tr className="tr2">
                        <td className="id">2</td>
                        <td className="time">2020-05-06 12:50:01</td>
                        <td className="quantity">3000</td>
                        <td className="performance">Good</td>
                        <td className="code">12341235214</td>
                    </tr>
                    <tr className="tr1">
                        <td className="id">3</td>
                        <td className="time">2020-05-06 12:50:01</td>
                        <td className="quantity">2500</td>
                        <td className="performance">Good</td>
                        <td className="code">12341235215</td>
                    </tr>
                    <tr className="tr2">
                        <td className="id">4</td>
                        <td className="time">2020-05-06 12:50:01</td>
                        <td className="quantity">3000</td>
                        <td className="performance">Good</td>
                        <td className="code">12341235216</td>
                    </tr>
                    <tr className="tr1">
                        <td className="id">5</td>
                        <td className="time">2020-05-06 12:50:01</td>
                        <td className="quantity">3000</td>
                        <td className="performance">Good</td>
                        <td className="code">12341235216</td>
                    </tr>
                    <tr className="tr2">
                        <td className="id">6</td>
                        <td className="time">2020-05-06 12:50:01</td>
                        <td className="quantity">3000</td>
                        <td className="performance">Good</td>
                        <td className="code">12341235216</td>
                    </tr>
                    <tr className="tr2">
                        <td className="id">7</td>
                        <td className="time">2020-05-06 12:50:01</td>
                        <td className="quantity">3000</td>
                        <td className="performance">Good</td>
                        <td className="code">12341235216</td>
                    </tr>
                    <tr className="tr1">
                        <td className="id">8</td>
                        <td className="time">2020-05-06 12:50:01</td>
                        <td className="quantity">3000</td>
                        <td className="performance">Good</td>
                        <td className="code">12341235216</td>
                    </tr>
                    <tr className="tr2">
                        <td className="id">9</td>
                        <td className="time">2020-05-06 12:50:01</td>
                        <td className="quantity">3000</td>
                        <td className="performance">Good</td>
                        <td className="code">12341235216</td>
                    </tr>
                </tbody>
            </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
