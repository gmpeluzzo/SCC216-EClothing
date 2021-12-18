const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Products = require('./Products/routes/product-route');
const app = express();

const router = express.Router();

app.use(cors());

const barra = router.get('/', (req, res, next) => {
    res.send('testing application');
})

app.use(bodyParser.json());

app.use('/', barra);

app.use('/products', Products);

mongoose
  .connect('mongodb://db:27017/scc219', {
    useNewUrlParser: true
  })
  .then(result => {
    console.log('MongoDB Conectado');
  })
  .catch(error => {
    console.log(error);
  });

  app.listen(9000, () => console.log('listening on port: 9000'));