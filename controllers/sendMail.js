const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground'

const {
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS
} = process.env

const oauth2Client = new OAuth2(
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    OAUTH_PLAYGROUND
)

// send mail
const sendEmail = async (to, url, txt) => {
    oauth2Client.setCredentials({
        refresh_token: MAILING_SERVICE_REFRESH_TOKEN
    })
    const getToken = await oauth2Client.getAccessToken()
    try {
        const accessToken = getToken.token
        const smtpTransport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: SENDER_EMAIL_ADDRESS,
                clientId: MAILING_SERVICE_CLIENT_ID,
                clientSecret: MAILING_SERVICE_CLIENT_SECRET,
                refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
                accessToken
            }
        })
        const mailOptions = {
            from: SENDER_EMAIL_ADDRESS,
            to: to,
            subject: "Activate Your Vatinaco Account Now",
            html: `
            <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
            <p style="text-align: center;">
            <img style="width: 400px;" src="https://res.cloudinary.com/phanhien203/image/upload/v1631329885/my%20pic/medical-research_vdpunl.png"/>
            </p>
            <h1 style="text-align: center; font-weight: 600; margin: 30px 0 50px 0;">Welcome to Vatinaco!</h1>
            <p>You’re just one click away from getting started with Vatinaco. All you need to do is verify your email address to activate your Vatinaco account.
            </p>
            
            <a href=${url} style="padding:10px;width:300px;display:block;text-decoration:none;border:1px solid #ff6c37;font-weight:bold;font-size:14px;font-family:'Open Sans',sans-serif;color:#ffffff;background:#ff6c37;border-radius:5px;line-height:17px;margin:0 auto;text-align:center">${txt}</a>
        
            <p>You’re receiving this email because you recently created a new Vatinaco account or added a new email address. If this wasn’t you, please ignore this email.</p>
            <p style="padding-top: 50px; padding-bottom:10px;">This email was sent to <b style="color:#ff6c37; text-decoration:none;">${to}</b>, which is associated with a Vatinaco account.</p>
            <p style="text-align: center;">© 2021 Vatinaco Inc., All Rights Reserved</p>
            </div>
        `
        }
        smtpTransport.sendMail(mailOptions, (err, infor) => {
            if (err) return err;
            return infor
        })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }

}

module.exports = sendEmail