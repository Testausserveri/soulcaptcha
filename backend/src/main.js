import dotenv from "dotenv"
dotenv.config()

import express from "express"
import fs from "fs/promises"
import { pdf } from "./pdf.js"
import { smtp } from "./smtp.js"
import { validateEmail } from "./utils.js"
import rateLimit from 'express-rate-limit'

const app = express()

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 4, // Limit each IP to 4 requests per `window` (here, per 15 minutes)
	standardHeaders: true,
	legacyHeaders: false, 
})

app.use(limiter)

app.use(express.json())

app.post("/api/scam", async (req, res) => {
    if (!req.body ||
        !req.body.signature ||
        !req.body.email ||
        !req.body.firstName ||
        !req.body.lastName ||
        !req.body.signature.startsWith("data:image/png;base64,") ||
        !validateEmail(req.body.email))  {
            console.log(`${req.body?.email} just did a naughty request. 💩 `)
            return res.status(400).status({ status: "Bad request" })
        }
    console.log(`${req.body.email} is about to get scammed! 😈`)

    const agreementFilename = await pdf.generate(req.body)
    await smtp.send(req.body, agreementFilename)
    
    fs.unlink(agreementFilename)

    res.json({ status: "User has been scammed successfully" })
})

app.listen(8081)