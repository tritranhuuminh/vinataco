import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Doughnut, Pie } from 'react-chartjs-2'
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import axios from 'axios'


export default function Storage() {
    const auth = useSelector(state => state.auth)
    const percentage = 60;
    return (
        <div className="col_right it storage">
            <p>Storage</p>
            <div className="chart">
                {/* <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    strokeWidth={9}
                    primaryColor={["#000000", "#ffffff"]}
                    background
                    backgroundPadding={0}
                    styles={{
                        path: {
                            transform: `rotate(${180 + ((100 - percentage) / 2 * 3.6)}deg)`,
                            transformOrigin: 'center center',
                        },
                        trail: {

                            stroke: '#c2c2c2be',
                        },

                        text: {

                            fill: 'rgb(0, 0, 0)',

                            fontSize: '20px',
                        },

                        background: {
                            fill: "#fff"
                        }

                    }}
                /> */}

            </div>
        </div >
    )
}

