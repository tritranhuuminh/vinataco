import React from 'react'
import { Link } from 'react-router-dom'
import { Doughnut, Bar, Line, Chart } from "react-chartjs-2"
import { useSelector } from 'react-redux'
import axios from 'axios'


export default function Culter() {
    const auth = useSelector(state => state.auth)
    const data = (canvas) => {
        const ctx = canvas.getContext("2d")
        var gradient1 = ctx.createLinearGradient(10, 20, 0, 100);
        gradient1.addColorStop(0, '#86d5fa');
        gradient1.addColorStop(1, '#59CBFF');
        var gradient2 = ctx.createLinearGradient(0, 0, 0, 80);
        gradient2.addColorStop(0, 'white');
        gradient2.addColorStop(1, '#FF647C');
        return {
            datasets: [
                {
                    label: "60",
                    data: [2478, 5267],
                    lineWidth: 1,
                    backgroundColor: [gradient1, gradient2],
                    borderWidth: 0.1,
                    hoverBorderWidth: 2,
                    hoverBorderColor: '#fff',
                    cutout: "60%"
                }
            ]

        }
    }
    const data2 = (canvas) => {
        const ctx = canvas.getContext("2d")
        var gradient1 = ctx.createLinearGradient(10, 20, 0, 100);
        gradient1.addColorStop(0, '#86d5fa');
        gradient1.addColorStop(1, '#59CBFF');
        var gradient2 = ctx.createLinearGradient(0, 0, 0, 80);
        gradient2.addColorStop(0, 'white');
        gradient2.addColorStop(1, '#FF647C');
        return {
            datasets: [
                {
                    label: "60",
                    lineWidth: 1,
                    data: [3000, 5267],
                    backgroundColor: [gradient1, gradient2],
                    borderWidth: 0.1,
                    hoverBorderWidth: 2,
                    hoverBorderColor: '#fff',
                    cutout: "60%"
                }
            ]

        }
    }


    return (
        <div className="col_left it culter">
            <p>Culter</p>
            <div className="chart">
                <div className="wrap_chart">
                    <div className="percent">
                        <Doughnut
                            id="doughnut"

                            data={data}
                            option={{
                                maintainAspectRatio: false,
                                responsive: true,
                                plugins: {
                                    title: {
                                        display: true,
                                        color: "#fff",
                                        text: "Tank 1",
                                        position: "center"
                                    },
                                    tooltip: {
                                        enabled: true,
                                        titleColor: "#fff",
                                        bodyColor: "#fff"
                                    },
                                    legend: {
                                        display: true,
                                        labels: {        
                                            font: {
                                                size: 14
                                            }
                                        }
                                    }
                                },
                                scales: {
                                    y: {
                                        max: 100,
                                        min: 0,
                                        ticks: {
                                            stepSize: 20,
                                            backdropColor: "rgba(255, 255, 255, 0)",
                                            color: "white",
                                            backdropPadding: 7,
                                            padding: 13,
                                            z: 2,
                                            textStrokeColor: "blue",
                                            font :{
                                                size: 20
                                            }
                                        },
                                        labels: "abc",
                                        title: {
                                            display: true,
                                            text: "vsdvs"
                                        }
                                    },
                                    x: {
                                        max: 100,
                                        min: 0,
                                        ticks: {
                                            stepSize: 20,
                                            backdropColor: "rgba(255, 255, 255, 0)",
                                            color: "white",
                                            backdropPadding: 7,
                                            padding: 13,
                                            z: 2,
                                            textStrokeColor: "blue",
                                            font :{
                                                size: 20
                                            }
                                        },
                                        labels: "abc",
                                        title: {
                                            display: true,
                                            text: "vsdvs"
                                        }
                                    }
                                }
                            }}
                        />

                        {/* <p>67%</p> */}
                    </div>

                    {/* <div>Tank 1</div> */}
                </div>
                <div className="wrap_chart">
                    <div className="percent">
                        <Doughnut
                            id="doughnut2"

                            data={data2}
                            option={{
                                title: {
                                    display: true,
                                    text: ""
                                }
                            }}
                        />
                        {/* <p>43%</p> */}
                    </div>
                    {/* <div>Tank 2</div> */}
                </div>

            </div>

        </div>
    )
}



