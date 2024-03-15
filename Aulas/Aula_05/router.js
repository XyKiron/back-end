const express = require('express');
const router = express.Router();

// Defina uma rota GET para o endpoint /produtos
router.get("/produtos", function(req, res){
    // Retorne um JSON vazio quando a rota for acessada
    res.json([]); //200 e JSON
});

router.get("/produtos/:produtoId", function(req, res){
    if (req.params.produtoId == 1){
        res.json({}); //200 e JSON
    } else {
        res.status(404).json({msg: "produto não encontrado"})
    }
});

router.post("/produtos", function(req, res){
    if (req.body && req.body.nome && req.body.preco){
        res.status(201).json({})
    } else {
        res.status(422).json({msg: "Nome e/ou preco do produto obrigatorios"});
    }
});

router.put("/produtos/:produtoId", function(req, res){
    if(req.params.produtoId == 1){
        res.json({})
    } else {
        res.status(404).json({msg: "produto não encontrado"})
    }
    
})

router.delete("/produtos/:produtoId", function(req, res){
    if(req.params.produtoId == 1){
        res.status(204).end()
    } else {
        res.status(404).json({msg: "produto não encontrado"})
    }
    
})

module.exports = router;