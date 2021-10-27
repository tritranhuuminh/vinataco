import React from 'react'
import { useSelector } from 'react-redux'
import { Line } from "react-chartjs-2"

export default function Energy() {
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

    return (
        <div className="oee_history element">
            <p>OEE history</p>
            <div className="chartOee">
                <Line data={dataOEE} options={optionsChartOee} />
            </div>
        </div>
    )
}

