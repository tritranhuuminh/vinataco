import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import './sidebar.scss'


export default function Sidebar(props) {
    const auth = useSelector(state => state.auth)
    const { user, isLogged } = auth
    const linkPage = [
        {
            path: "dashboard",
            icon: "/a_dashboard.svg"
        },
        {
            path: "culter",
            icon: "/a_culter.svg"
        },
        {
            path: "packing",
            icon: "/a_sitemap.svg"
        },
        {
            path: "storage",
            icon: "/a_storage.svg"
        },
        {
            path: "planning",
            icon: "/a_chart.svg"
        },
        {
            path: "",
            icon: "/a_edit-table.svg"
        },
        {
            path: "setting",
            icon: "/a_setting.svg"
        }

    ];

    const location = useLocation()
    const handleLogout = async () => {
        try {
            await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }

    return (
        <nav className="side_bar">
            <div className="avatar">
                <img src={user.avatar} />
            </div>
            <ul className="menu">
                {linkPage.map((value, index) => {
                    return (
                        <Link to={`/admin/${value.path}`} className={(location.pathname.slice(7) === value.path) ? 'active' : ''} >
                            <img src={value.icon} />
                            {(location.pathname.slice(7) === value.path) ? `${value.path}` : ''}
                        </Link>
                    )
                })}
            </ul>

            <button className="btn_logout" onClick={handleLogout}><img src='/a_logout.svg' /></button>
        </nav>
    )
}

