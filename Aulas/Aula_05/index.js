const express = require('express');

// Importe o roteador de produtos
const routerProdutos = require('./router')

// Crie uma aplicação Express
const app = express();

app.use(express.json())

// Use o roteador de produtos
app.use(routerProdutos);

// Inicialize a aplicação na porta 3000
app.listen(3000, function(){
    console.log("API está ON!")
});

// Exporte a aplicação
module.exports  = app;