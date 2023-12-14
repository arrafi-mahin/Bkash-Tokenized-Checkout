const express = require('express')
const Bkash = require('./lib')
require('dotenv').config();
const port = 3000

const app = express()
Bkash.Token();
// const url = process.env.BASEURL;
// console.log(url);

app.get('/agreement',async (req, res) => {
   const url = await Bkash.Agreement.createAgreement();
   console.log(url);
    res.redirect(url)
})
app.get('/payment', (req, res) => {
    Bkash.Agreement;
    res.send('Hello World!')
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})