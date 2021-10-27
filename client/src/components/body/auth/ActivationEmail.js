import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from '../../utils/notification/Notification'

function ActivationEmail() {
    const { activation_token } = useParams()
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                try {
                    const res = await axios.post('/user/activation', { activation_token })
                    setSuccess(res.data.msg)
                } catch (err) {
                    err.response.data.msg && setErr(err.response.data.msg)
                }
            }
            activationEmail()
        }
    }, [activation_token])

    return (
        <div className="auth">
            <div className="wrap" >
                <div className="form">
                        {err  && showImgErr()}
                        {success  && showImgSuccess()}

                </div>
            </div>

        </div>
    )
}

export default ActivationEmail

export const showImgErr = () => {
    return (<div className="check_form">
    <h2 className="check_title">ACCOUNT HAS NOT BEEN ACTIVATED</h2>
        <img className="img_check" src="/lose.svg" />
        <div className="wrap_button">
            <button ><Link to='/register'>SIGN UP</Link></button>
        </div>
    </div>)
}

export const showImgSuccess = () => {
    return (<div className="check_form">
    <h2 className="check_title">ACCOUNT HAS BEEN ACTIVATED</h2>
        <img className="img_check" src="/success.svg" />
        <div className="wrap_button">
            <button ><Link to='/login'>SIGN IN</Link></button>
        </div>
    </div>)
}