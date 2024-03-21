// Importando o módulo Express
const express = require('express');

// Crie uma aplicação Express
const app = express();

// Inicialize a aplicação na porta 3000
app.listen(3000, function(){
    console.log("API está ON!");
});

// Exporte a aplicação
module.exports  = app;