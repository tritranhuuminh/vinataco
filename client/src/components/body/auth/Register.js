import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from '../../utils/notification/Notification'
import { isEmpty, isEmail, isLength, isMatch } from '../../utils/validation/Validation'


const initialState = {
    name: '',
    email: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function Register() {
    const [user, setUser] = useState(initialState)

    const { name, email, password, cf_password, err, success } = user

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value, err: '', success: '' })
    }


    const handleSubmit = async e => {
        e.preventDefault()
        if (isEmpty(name) || isEmpty(password))
            return setUser({ ...user, err: "Please fill in all fields.", success: '' })

        if (!isEmail(email))
            return setUser({ ...user, err: "Invalid emails.", success: '' })

        if (isLength(password))
            return setUser({ ...user, err: "Password must be at least 6 characters.", success: '' })

        if (!isMatch(password, cf_password))
            return setUser({ ...user, err: "Password did not match.", success: '' })

        try {
            const res = await axios.post('/user/register', {
                name, email, password
            })

            setUser({ ...user, err: '', success: res.data.msg })
        } catch (err) {
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    }

    return (
        <div className="auth" >
            <div className="wrap">
                <div className="form">
                    <h2>CREATE NEW ACCOUNT</h2>
                    <img className="img_signup" src="new-acc.svg" />
                    {err && showErrMsg(err)}
                    {success && showSuccessMsg(success)}

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Enter your name" id="name"
                                value={name} name="name" onChange={handleChangeInput} />
                        </div>

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

                        <div>
                            <label htmlFor="cf_password">Confirm Password</label>
                            <input type="password" placeholder="Confirm password" id="cf_password"
                                value={cf_password} name="cf_password" onChange={handleChangeInput} />
                        </div>

                        <div className="wrap_button">
                            <button type="submit">SIGN UP</button>
                        </div>
                    </form>

                    <p>Already an account? <Link to="/login">Sign in</Link></p></div>
            </div>
        </div>
    )
}

export default Register
