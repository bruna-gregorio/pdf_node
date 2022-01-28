const express = require('express')
const ejs = require('ejs')
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
  ejs.renderFile(filePath, { passengers }, (err, data) => {
    if (err) {
      return res.send('Erro na leitura de arquivo')

    }
    return res.send(data)
  })
})

app.listen(3333, () => console.log("Server is running on port 3333"))