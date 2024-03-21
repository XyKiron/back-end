// Importando a biblioteca supertest
const supertest = require('supertest');

// Instanciando o objeto do servidor
const app = require('./index');

// Criando um objeto para realizar as requisições http
const request = supertest(app);

// Testa se o servidor está funcionando cor
test("Deve retornar status 200 e um JSON no GET", async function() {
  const response = await request.get("/produtos");
  expect(response.status).toBe(200);
  expect(response.headers['content-type'])
    .toMatch(/json/);
});

// Adiciona um produto
test("Deve retornar status 200 e um JSON no GET id", async function() {
  const response = await request.get("/produtos/1");
  expect(response.status).toBe(200);
  expect(response.headers['content-type'])
    .toMatch(/json/);
});

// Tenta adicionar um produto sem nome
test("Deve retornar status 404 e um JSON no GET id", async function() {
  const response = await request.get("/produtos/100");
  expect(response.status).toBe(404);
  expect(response.headers['content-type'])
    .toMatch(/json/);
});

test("Deve retornar status 201 e um JSON no POST", async function() {
    const response = (await request.post("/produtos")).setEncoding({nome: "Banana", preco: 15.00});
    expect(response.status).toBe(201);
    expect(response.headers['content-type']).toMatch(/json/);
});

test("Deve retornar status 422 e um JSON no POST", async function() {
  const response = await request.post("/produtos");
  expect(response.status).toBe(422);
  expect(response.headers['content-type']).toMatch(/json/);
});

test("Deve retornar status 200 e um JSON no PUT", async function() {
  const response = await request.put("/produtos/1").send({nome: "Banana prata", preco: 18.00});
  expect(response.status).toBe(200);
  expect(response.headers['content-type']).toMatch(/json/);
});


