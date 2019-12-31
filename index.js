const express = require("express");
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const {postCategory, notFound} = require('./src/controllers')
const makeCallback = require('./src/express-callback')


const apiRoot = process.env.DM_API_ROOT
console.log("apiRoot :: ",  `${apiRoot}/category`);
const app = express()
app.use(bodyParser.json())

app.use((_, res, next) => {
  res.set({ Tk: '!' })
  next()
})
//app.post(`${apiRoot}/category`, makeCallback(postCategory))
app.post('/category', makeCallback(postCategory))
app.use(makeCallback(notFound))

// // listen for requests
app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})


 module.exports = app