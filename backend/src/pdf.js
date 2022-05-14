import PDFDocument from "pdfkit"
import fs from "fs"

async function generate(details) {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument({size: 'A4'})
        const now = new Date()
        const filename = `temp${new Date().getTime()}.pdf`
        const writeStream = fs.createWriteStream(filename)

        doc.pipe(writeStream)
        doc
            .fontSize(20)
            .text(`I, ${details.firstName} ${details.lastName}, hereby relinquish my eternal Soul from today onwards for the company Testausserveri ry.`, 50, 50)
            .image(details.signature, 50, 280)
            .moveTo(50, 380)                           
            .lineTo(550, 380)
            .stroke()
            .text(`${details.firstName} ${details.lastName}, ${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`, 50, 400);

        doc.end()

        writeStream.on('finish', () => {
            resolve(filename)
        })
    })
}

export const pdf = { generate }