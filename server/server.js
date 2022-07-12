const express   = require('express');
const app       = express();

const port     = 3000;
const IP       = '127.0.0.8';

app.get('/', (req, res) => {
  res.send('Hi, my server is running');
});

app.get('/new-rute', (req, res) => {
  res.send('Hi, New EndPoint');
});

app.get('/products', (req, res) => {
  res.json({
    products: [
      {
        name: 'Product 1',
        price: '$100'
      },
      {
        name: 'Product 2',
        price: '$200'
      },
    ]
  });
});

app.get('/products/:id', (req, res) => {
  const {id}  = req.params;
  res.json({
    product: [
      {
        id,
        name: 'Product 1',
        price: '$100'
      },
    ]
  });
});

app.get('/users', (req, res) => {
  const {limit, offset}  = req.query;
  if(limit && offset)
  {
    res.json({
      users: [
        {
          limit,
          offset
        }
      ]
    });
  }else
  {
    res.send('Error no hay parametros para: limit , offset');
    console.error('Error no hay parametros para: limit , offset');
  }

});

app.get('/categories/:categforyId/products/:productId', (req, res) => {
  const { categforyId, productId }  = req.params;
  res.json({
    categforyId,
    productId
  });
});

app.listen(port, () => {
  console.log("http://"+ IP +":" + port + "/");
});