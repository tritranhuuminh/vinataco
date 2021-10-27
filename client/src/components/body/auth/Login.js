import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from '../../utils/notification/Notification'
import { dispatchLogin } from '../../../redux/actions/authAction'
import { useSelector, useDispatch } from 'react-redux'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';


const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}

function Login() {
    const auth = useSelector(state => state.auth)
    const role = useSelector(state => state.users)
    const {users, isAdmin} = auth
    const token = useSelector(state => state.token)
    const [user, setUser] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()

    const { email, password, err, success } = user

    useEffect(() => {
        if (token !== "") {
            history.push("/")
        }
    }, [token])

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value, err: '', success: '' })
    }
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('/user/login', { email, password })
            setUser({ ...user, err: '', success: res.data.msg })

            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            if (isAdmin) history.push("/profile")
            else history.push("/")

        } catch (err) {
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    }

    const responseGoogle = async (response) => {
        try {
            const res = await axios.post('/user/google_login', { tokenId: response.tokenId })

            setUser({ ...user, error: '', success: res.data.msg })
            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push('/')
        } catch (err) {
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    }

    const responseFacebook = async (response) => {
        try {
            const { accessToken, userID } = response
            const res = await axios.post('/user/facebook_login', { accessToken, userID })

            setUser({ ...user, error: '', success: res.data.msg })
            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push('/')
        } catch (err) {
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    }

    return (
        <div className="auth" >
            <div className="wrap">
                <div className="form">
                    <h2>SIGN IN YOUR ACCOUNT</h2>
                    <img className="img_login_page" src="group.svg" />
                    {err && showErrMsg(err)}
                    {success && showSuccessMsg(success)}

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input type="text" placeholder="Enter email address" id="email"
                                value={email} name="email" onChange={handleChangeInput} />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Enter password" id="password"
                                value={password} name="password" onChange={handleChangeInput} />
                        </div>

                        <div className="wrap_button">
                            <button type="submit">SIGN IN</button>
                        </div>
                    </form>

                    <p>
                        <Link to="/forgot_password">Forgot password</Link>
                        <Link to="/register" className="link_signup">Sign up</Link>
                    </p>
                    <div className="social">
                        <h3>Or login with</h3>
                        <div>
                            <GoogleLogin
                                clientId="379576929585-8lki6003vnnlnsn3tmp8poq9upaq9f4i.apps.googleusercontent.com"
                                buttonText="Login with google"
                                onSuccess={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                className="login_with"
                            />
                            <FacebookLogin
                                appId="1174114753079317"
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={responseFacebook}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login
