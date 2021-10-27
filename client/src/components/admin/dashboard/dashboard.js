import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

import Culter from "./culter"
import Energy from "./energy";
import Environment from "./environment";
import Main from "./main";
import Performance from "./performance";
import Schedule from "./schedule";
import Storage from "./storage";
import History from "./history"

import './dashboard.scss'


export default function Dashboard() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="dashboard">
            <div className="tb_lf">
                <Culter />
                <Main />
                <div className="tb_rt">
                    <Performance />
                    <Schedule />
                    <Storage />
                </div>

                <Environment />
                <Energy />
                <History />
            </div>
        </div>
    )
}
