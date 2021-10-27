import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'


export default function History() {
    const auth = useSelector(state => state.auth)

    return (
        <div className="datasheet it">
            <p>History</p>
            <table>
                <thead>
                    <tr>
                        <th className="id">ID</th>
                        <th className="time">Time</th>
                        <th className="quantity">Quantity</th>
                        <th className="performance">Performance</th>
                        <th className="code">Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="tr1">
                        <td className="id">1</td>
                        <td className="time">2020-05-06 12:50:01</td>
                        <td className="quantity">2000</td>
                        <td className="performance">Good</td>
                        <td className="code">12341235213</td>
                    </tr>
                    <tr className="tr2">
                        <td className="id">2</td>
                        <td className="time">2020-05-06 12:50:01</td>
                        <td className="quantity">3000</td>
                        <td className="performance">Good</td>
                        <td className="code">12341235214</td>
                    </tr>
                    <tr className="tr1">
                        <td className="id">3</td>
                        <td className="time">2020-05-06 12:50:01</td>
                        <td className="quantity">2500</td>
                        <td className="performance">Good</td>
                        <td className="code">12341235215</td>
                    </tr>
                    <tr className="tr2">
                        <td className="id">4</td>
                        <td className="time">2020-05-06 12:50:01</td>
                        <td className="quantity">3000</td>
                        <td className="performance">Good</td>
                        <td className="code">12341235216</td>
                    </tr>
                    <tr className="tr1">
                        <td className="id">5</td>
                        <td className="time">2020-05-06 12:50:01</td>
                        <td className="quantity">3000</td>
                        <td className="performance">Good</td>
                        <td className="code">12341235216</td>
                    </tr>
                    <tr className="tr2">
                        <td className="id">6</td>
                        <td className="time">2020-05-06 12:50:01</td>
                        <td className="quantity">3000</td>
                        <td className="performance">Good</td>
                        <td className="code">12341235216</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

