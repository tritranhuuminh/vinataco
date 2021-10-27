import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import './home.scss'
function Home() {
    const auth = useSelector(state => state.auth)
    const { user, isLogged, isAdmin } = auth

    const [button1, setButton1] = useState(true);
    const [button2, setButton2] = useState(true);

    useEffect(() => {
        if (isAdmin) {
            const adminPage = window.open('/admin/dashboard')
        }
    }, [isAdmin])

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
        <div className="home_page" >
            <div className="nav_bar">
                <div className="logo">
                    <img className="img_logo" src="logo.svg" />
                    <h2>Vatinaco</h2>
                </div>
                <div className="menu">
                    <Link className="menu_item link_my_factory" to="/">MY FACTORY</Link>
                    <Link className="menu_item link_community" to="/">COMMUNITY</Link>
                    <Link className="menu_item link_about" to="/">ABOUT</Link>
                </div>
                <ul style={{ transform: isLogged ? "translateY(-5px)" : 0 }} className="sign">
                    {isLogged
                        ? <li className="drop_profile">
                            <Link to="#" className="profile">
                                <img className="img_avatar" src={user.avatar} alt="" />
                                <p>{user.name}</p>
                            </Link>
                            <i className="fas fa-angle-down" />
                            <ul className="dropdown">
                                <li><Link className="drop_item" to="/profile">Profile</Link></li>
                                <li><Link className="drop_item" to="/" onClick={handleLogout}>Logout</Link></li>
                            </ul>
                        </li>
                        : <li><Link to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
                    }
                </ul>
            </div>
            <div className="banners">
                <h1 className="banner_title">Manufacturing,<br /> safety<br /> and quality control<br /> of vaccines</h1>
                <img className="img_banner" src="banner.png" />
            </div>
            <div className="container">
                <iframe width="625" height="350"
                    className="video"
                    src="https://www.youtube.com/embed/CrsnwQZIak8"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                <div className="row content-1">
                    <img className="img_content1" src="pic3.png" />
                    <div className="para">
                        <h2>How it’s made </h2>
                        <p style={{ display: button1 ? "-webkit-box;" : "block" }}>Typically, companies will work independently to complete clinical development plans for a vaccine. Once a vaccine is authorized, manufacturing begins to scale up. The antigen (part of the germ that our immune system reacts to)
                            is weakened or deactivated. To form the full vaccine, all ingredients are combined. <br /><br />
                            The whole process, from preclinical trial to manufacture, can sometimes take over a decade to complete. In the search for a COVID-19 vaccine, researchers and developers are working on several different phases in parallel, to speed
                            up results. It is the scale of the financial and political commitments to the development of a vaccine that has allowed this accelerated development to take place. Also, nations and international health organizations are working
                            together through COVAX to invest in development capacity upfront to streamline the process, as well as to ensure equitable distribution of vaccines. 
                        </p>
                        {button1
                            ? <div className="more" onClick={() => setButton1(false)}>more than</div>
                            : <></>
                        }

                    </div>
                </div>
                <div className="row content-2" style={{ background: '#fff' }}>
                    <div className="para">
                        <h2>How it’s packaged</h2>
                        <p style={{ display: button2 ? "-webkit-box;" : "block" }}>
                            Once the vaccine has been made in bulk quantities’, it is bottled in glass vials and then carefully packaged for safe cold storage and transport. <br /><br />
                            Vaccine packaging must be able to withstand extreme temperatures, as well as the risks involved in being transported globally. Therefore, vaccine vials are most commonly made from glass, as it is durable and able to maintain its
                            integrity in extreme temperatures.
                        </p>
                        {button2
                            ? <div className="more" onClick={() => setButton2(false)}>more than</div>
                            : <></>
                        }
                    </div>
                    <img className="img_content2" src="pic2.png" />
                </div>
                <div className="content-3" >
                    <h2 style={{ textAlign: 'center' }}>Welcome to Nanocovax Vaccine Factory</h2>
                    <img className="img_content3" src="https://cdn.dribbble.com/users/1052957/screenshots/3453371/factory-1.gif" />
                </div>
            </div>
            <footer>
                <div className="logo">
                    <img className="img_logo_s" src="logo.svg" />
                    <h3>Vatinaco</h3>
                </div>
                <h4>Contact us</h4>
                <p>
                    <i style={{ fill: '#fff' }} class="fas fa-envelope me-3" />
                    Vatinaco.team@gmail.com
                </p>
                <p>© 2021 Vatinaco Inc., All Rights Reserved</p>
            </footer>
        </div>
    )
}

export default Home
