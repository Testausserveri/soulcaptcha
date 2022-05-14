import dotenv from "dotenv"
dotenv.config()

import nodemailer from "nodemailer"

let transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USERNAME, 
      pass: process.env.SMTP_PASSWORD, 
    },
})

function send(details, agreementFilename) {
    return transporter.sendMail({
        from: process.env.SMTP_USERNAME,
        to: "<Legal Department> legal@testausserveri.fi",
        cc: details.email, 
        subject: "Agreement has been signed", 
        text: `Something here`,
        attachments: {
            filename: "agreement.pdf",
            path: agreementFilename
        }
    });
}

export const smtp = { send }