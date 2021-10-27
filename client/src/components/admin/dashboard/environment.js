import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'


export default function Environment() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="col_left it environment">
            <p>Environment</p>
            <div className="chart">
                <div className="bar">
                    <p>CO2</p>
                    <span style={{height: "35%"}}></span>
                </div>
                <div className="bar">
                    <p>O2</p>
                    <span style={{height: "25%"}}></span>
                </div>
                <div className="bar">
                    <p>Temp</p>
                    <span style={{height: "75%"}}></span>
                </div>
                <div className="bar">
                    <p>Humidity</p>
                    <span style={{height: "55%"}}></span>
                </div>
                <div className="bar">
                    <p>pH</p>
                    <span style={{height: "85%"}}></span>
                </div>
                <div className="bar">
                    <p>DO</p>
                    <span style={{height: "5%"}}></span>
                </div>
            </div>
        </div>
    )
}

