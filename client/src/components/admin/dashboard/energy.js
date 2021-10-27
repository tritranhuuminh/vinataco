import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Radar } from "react-chartjs-2"
import axios from 'axios'


export default function Energy() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="col_left it energy">
            <p>Energy</p>
            <div className="chart">

                <Radar
                    data={{
                        labels: [
                            'Eating',
                            'Drinking',
                            'Sleeping',
                            'Designing',
                            'Coding',
                            'Cycling',
                            'Running'
                        ],
                        datasets: [{
                            data: [60, 50, 90, 80, 50, 50, 40],
                            fill: true,
                            backgroundColor: 'rgba(255, 255, 255, 0)',
                            borderColor: 'rgb(255, 99, 132)',
                            pointBackgroundColor: 'rgb(255, 99, 132)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgb(255, 99, 132)'
                        }]
                    }}
                    options={{
                        responsive: true,
                        elements: {
                            line: {
                                borderWidth: 3
                            }
                        },
                        plugins: {
                            // title: {
                            //     display: true,
                            //     color: "#fff",
                            //     text: "hello"
                            // },
                            tooltip: {
                                enabled: true,
                                titleColor: "#fff",
                                bodyColor: "#fff"
                            },
                            legend: {
                                display: false,
                                labels: {

                                    // This more specific font property overrides the global property
                                    font: {
                                        size: 14
                                    }
                                }
                            }
                        },
                        scales: {
                            r: {
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
                                grid: {
                                    color: 'white',
                                    borderColor: 'white',
                                    tickColor: 'white'
                                },
                                angleLines: {
                                    color: 'white'
                                },
                                pointLabels: {
                                    color: 'white',
                                    font: {
                                        size: 20
                                    },
                                    backdropPadding: 5
                                }
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}

