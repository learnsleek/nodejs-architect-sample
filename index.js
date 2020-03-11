const express = require("express");
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const apiRoot = process.env.LS_API_ROOT
const port =  process.env.LS_PORT

const {postCategory, notFound} = require('./src/controllers')
const makeCallback = require('./src/express-callback')

const app = express()
app.use(bodyParser.json())

app.use((_, res, next) => {
  res.set({ Tk: '!' })
  next()
})
app.post(`${apiRoot}/category`, makeCallback(postCategory))
app.use(makeCallback(notFound))

// // listen for requests
app.listen(`${port}`, () => {
  console.log('Server is listening on port 3000')
})

module.exports = app