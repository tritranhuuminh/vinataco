import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Bar } from 'react-chartjs-2'
import axios from 'axios'


export default function Schedule() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="col_right it schedule">
            <p>Schedule</p>
            <div className="chart">
                <Bar
                    data={{
                        labels: ["2015-01", "2015-02", "2015-03", "2015-04", "2015-05", "2015-06", "2015-07", "2015-08", "2015-09", "2015-10", "2015-11", "2015-12"],
                        datasets: [
                            {
                                label: "Africa",
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
                        title: {
                            display: true,
                            text: 'Population growth (millions)'
                        },
                        scales:
                        {
                            yAxes: [
                                {
                                    gridLines: {
                                        color: "#fff",
                                        zeroLineColor: "#fff"
                                    },
                                    ticks: {
                                        fontColor: "green",
                                        fontSize: 18,
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        color: "#fff",
                                        zeroLineColor: "#fff"
                                    },
                                    ticks: {
                                        fontColor: "purple",
                                        fontSize: 14,
                                    }
                                }
                            ]
                        },

                        plugins: {
                            legend: false,
                            fontColor: "white"
                        }

                    }}
                    style={{
                        color: '#fff'
                    }}
                />
            </div>
        </div>
    )
}

