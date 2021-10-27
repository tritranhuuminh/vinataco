import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'


export default function Main() {
    const auth = useSelector(state => state.auth)
    const [timeString, setTimeString] = useState('')

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);
        }, 1000)
        return () => {
            clearInterval(clockInterval)
        };
    }, []);

    const formatDate = (date) => {
        if (!date) return "";
        const hours = `0${date.getHours()}`.slice(-2);
        const minutes = `0${date.getMinutes()}`.slice(-2);
        const seconds = `0${date.getSeconds()}`.slice(-2);

        return `${hours}:${minutes}:${seconds}`;
    }

    return (
        <div className="main_db ">

            <h3>Manufacturing Nanocovax Vaccine</h3>
            <h2>{timeString}</h2>
            <div className="bg_m">
                <h4></h4>
                <img className="bg ctr" src="/test.svg" />

            </div>

        </div>
    )
}

