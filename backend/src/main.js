import dotenv from "dotenv"
dotenv.config()

import express from "express"
import { pdf } from "./pdf.js"
import { smtp } from "./smtp.js"

const app = express()

app.use(express.json())

app.post("/api/scam", async (req, res) => {
    console.log(req.body)

    // to-do: validate email
    if (!req.body ||
        !req.body.signature ||
        !req.body.email ||
        !req.body.firstName ||
        !req.body.lastName ||
        !req.body.signature.startsWith("data:image/png;base64,"))  {
            res.status(400).status({ status: "Bad request" })
        }
    
    const agreementFilename = await pdf.generate(req.body)
    await smtp.send(req.body, agreementFilename)
    
    res.json({ status: "User has been scammed successfully" })
})

app.listen(8081)