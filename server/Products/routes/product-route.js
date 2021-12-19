const express = require('express');
const router = express.Router();

const Product = require('../product-schema');

router.post('/add', (req, res, next) => {
  console.log(req.body)
  const product = new Product({
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    description: req.body.description
  });

  product
    .save()
    .then(result => {
      res.status(202).json({message: "produto adicionado com sucesso."});
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/', (req, res) => {
    Product.find()
      .then(products => {
        console.log(products);
        res.status(200).json(products);
      })
      .catch(error => {
          res.status(500).json(error);
      })
  });

  router.put('/update/:id', (req, res) => {
    const newProductSpec = {
      marca: req.body.marca,
      preco: req.body.preco,
      quantidade: req.body.quantidade,
      descricao: req.body.descricao
    }

    Product.findOneAndUpdate({_id: req.params.id}, newProductSpec, {new: true})
        .then(products => {
            res.status(200).json({message: "Informações do produto alterados com sucesso."});
        })
        .catch(error => {
            res.status(500).json(error);
        })
  });

  router.delete('/delete/:id', (req, res) => {
    console.log(req);
    Product.findOneAndDelete({ _id: req.params.id })
      .then(product => {
        res.json({message: "Produto deletado com sucesso"});
      })
      .catch(error => res.status(500).json(error));
  });

module.exports = router;