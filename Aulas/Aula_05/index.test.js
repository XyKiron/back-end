const supertest = require('supertest');

// Importe a aplicação Express para testar
const app = require('./index');
const { response } = require('express');

// Crie uma função de solicitação Supertest para a aplicação
const request = supertest(app);

// Defina o teste para verificar se o endpoint /produtos retorna um status 200 e um JSON
test("Deve retornar status 200 e um JSON no GET", 
async function(){
        // Faça uma solicitação GET para o endpoint /produtos
        const resposta = await request.get("/produtos")
        // Verifique se o status da resposta é 200
        expect(resposta.status).toBe(200);
        // Verifique se o cabeçalho de conteúdo da resposta é JSON
        expect(resposta.headers['content-type']).toMatch(/json/);
})