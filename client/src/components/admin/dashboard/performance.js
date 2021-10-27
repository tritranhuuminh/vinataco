import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Bubble } from "react-chartjs-2"
import axios from 'axios'


export default function Performance() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="col_right it performance">
            <p>Performance</p>
            <div className="chart">
                {/* <img src='/chart3.svg' /> */}
                <Bubble
                    data={{
                        labels: "Africa",
                        datasets: [
                            {
                                label: ["Now"],
                                backgroundColor: "#FF8396",
                                borderColor: "rgba(0, 0, 0, 0.1)",
                                data: [{
                                    x: 5,
                                    y: 50,
                                    r: 50
                                }]
                            },
                            {
                                label: ["Perious"],
                                backgroundColor: "#4D96BE",
                                borderColor: "rgba(0, 0, 0, 0.1)",
                                data: [{
                                    x: 0,
                                    y: 35,
                                    r: 35
                                }]
                            },  {
                                label: ["Expected"],
                                backgroundColor: "#1AE2CA",
                                borderColor: "rgba(0, 0, 0, 0.1)",
                                data: [{
                                    x: 10,
                                    y: 45,
                                    r: 45
                                }]
                            }
                        ]
                    }}
                    options={{
                        scales:
                                {
                                    y: {
                                        grace: '100%',
                                        display: false
                                    },

                                    x: {
                                        grace: '100%',
                                        display: false
                                    },
                                },
                        plugins: {
                            legend: {
                              display: false
                            }
                          }
                    }}
                />

            </div>
            <div className="type">
                <div><div style={{ background: '#FF8396' }}></div>Now</div>
                <div><div style={{ background: '#42CAEB' }}></div>Perious</div>
                <div><div style={{ background: '#1AE2CA' }}></div>Expected</div>
            </div>
        </div>
    )
}

