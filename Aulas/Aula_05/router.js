const express = require('express');
const router = express.Router();

// Defina uma rota GET para o endpoint /produtos
router.get("/produtos", function(req, res){
    // Retorne um JSON vazio quando a rota for acessada
    res.json([]);
});

// Exporte o roteador
module.exports = router;