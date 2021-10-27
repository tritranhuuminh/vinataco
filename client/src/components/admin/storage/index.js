import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'



import './storage_page.scss'


export default function StoragePage() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="storage_page">
            <h3>storage area</h3>
            <div className="data">
                <div className="mixer element">
                    <p>Mixer</p>
                    <div className="chart">
                       
                    </div>
                </div>
                <div className="user_space element">
                    <p>User space</p>
                    <div className="chart">
                       
                    </div>
                </div>
                <div className="temperature element">
                    <p>Temperature</p>
                    <div className="chart">                       
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
