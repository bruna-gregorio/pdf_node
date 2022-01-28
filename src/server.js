const express = require('express')
const ejs = require('ejs')
const pdf = require('html-pdf')
const path = require('path')

const app = express()

const passengers = [
  {
    name: "Joyce",
    flightNumber: 7859,
    time: "18h00"
  },
  {
    name: "Broke",
    flightNumber: 7859,
    time: "18h00"
  },
  {
    name: "Eve",
    flightNumber: 7859,
    time: "18h00"
  }
]

app.get('/', (req, res) => {

  const filePath = path.join(__dirname, "print.ejs")
  ejs.renderFile(filePath, { passengers }, (err, html) => {
    if (err) {
      return res.send('Erro na leitura de arquivo')
    }

    const options = {
      height: "11.25in",
      width: "8.5in",
      header: {
        height: "20mm"
      },
      footer: {
        height: "20mm"
      }
    }

    // criar o pdf
    pdf.create(html, options).toFile("report.pdf", (err, data) => {
      if (err) {
        return res.send("Erro ao gerar pdf")
      }

      // enviar para o navegador
      return res.send("Arquivo gerado com sucesso")
    })

  })
})

app.listen(3333, () => console.log("Server is running on port 3333"))