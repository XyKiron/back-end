const supertest = require('supertest');

// Importe a aplicação Express para testar
const app = require('./index');
const { response } = require('express');

// Crie uma função de solicitação Supertest para a aplicação
const request = supertest(app);

// Defina o teste para verificar se o endpoint /produtos retorna um status 200 e um JSON
test("Deve retornar status 200 e um JSON no GET", async function() {
    // Faça uma solicitação GET para o endpoint /produtos
    const resposta = await request.get("/produtos")
    // Verifique se o status da resposta é 200
    expect(resposta.status).toBe(200);
    // Verifique se o cabeçalho de conteúdo da resposta é JSON
    expect(resposta.headers['content-type']).toMatch(/json/);
});

// Defina o teste para verificar se o endpoint /produtos/:id retorna um status 200 e um JSON
test("Deve retornar status 200 e um JSON no get id", async function() {
    const response = await request.get("/produtos/1");
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
})

// Defina o teste para verificar se o endpoint /produtos/:id inexistente retorna um status 404 e um JSON
test("Deve retornar status 404 e um JSON no get id", async function() {
    const response = await request.get("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
})

// Defina o teste para verificar se o endpoint /produtos com POST retorna um status 201 e um JSON com um novo produto
test("Deve retornar status 201 e um JSON no get id", async function() {
    const response = await request.post("/produtos").send({nome: "banana", preco: 15.00});
    expect(response.status).toBe(201);
    expect(response.headers['content-type']).toMatch(/json/);
})

// Defina o teste para verificar se o endpoint /produtos com POST sem parâmetros retorna um status 422 e um JSON
test("Deve retornar status 422 e um JSON no get id", async function() {
    const response = await request.post("/produtos");
    expect(response.status).toBe(422);
    expect(response.headers['content-type']).toMatch(/json/);
})

// Defina o teste para verificar se o endpoint /produtos/:id com PUT retorna um status 200 e um JSON com o produto atualizado
test("Deve retornar status 200 e um JSON no PUT id", async function() {
    const response = await request.put("/produtos/1").send({nome: "banana", preco: 15.00})
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar status 404 e sem Body no DELETE", async function() {
    const response = await request.put("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar status 204 e sem Body no DELETE", async function() {
    const response = await request.delete("/produtos/1");
    expect(response.status).toBe(204);
    expect(response.body).toEqual({})
})

test("Deve retornar status 204 e sem Body no DELETE", async function(){
     const response = await request.put("/produtos/100");
     expect(response.status).toBe(404);
     expect(response.headers['content-type']).toMatch(/json/);
})