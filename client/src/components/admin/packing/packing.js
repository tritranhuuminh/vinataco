
import React, {useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Doughnut, Bar, Line, Pie } from "react-chartjs-2"
import Mixer from "./mixer"
import OEEhistory from "./oeehistory"

import './packing_page.scss'

import socketIOClient from "socket.io-client";
const host = "http://localhost:5000";

export default function PackingPage() {
    const auth = useSelector(state => state.auth)

    const [data, setData] = useState({ mixer: 0 })

    const socketRef = useRef()
    useEffect(() => {
        socketRef.current = socketIOClient.connect(host)
        socketRef.current.on('sendDataServer', data => {
            setData({ mixer: data.tempCulture1.toFixed(2)});
            console.log(data)
        })
        return () => {
            socketRef.current.disconnect();
        };
    }, []);

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

    return (
        <div className="packing_page">
            <h3>packing area</h3>
            <div className="data">
                <div className="row_1">
                    <Mixer dataRT={data.mixer} />
                    <div className="oee_realtime element">
                        <p>OEE realtime</p>
                        <div className="chart">

                        </div>
                    </div>
                    <OEEhistory />
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
