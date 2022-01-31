const express = require('express');
const bodyParser = require("body-parser")

const customer = require('./routes/customer.js')

const app = express();

app.use(bodyParser.json())

app.get('/',(req, res) => {
    res.send("Hello World");
  })

app.use('/customer', customer);

app.listen(3000, function() {
    console.log('listening on 3000')
});