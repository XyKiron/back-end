// importa o pacote supertest
const supertest = require('supertest');

// importa a instância da aplicação Express
const app = require("../app");

 // cria uma instância de requisição usando a função supertest() passando a instância da aplicação Express
const request = supertest(app);

// Adiciona um produto com sucesso
test("Deve retornar status 201 e um JSON no POST", async function() {
    const response = await request.post("/produtos").send({nome: "Banana", preco: 15.00});
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('nome', 'Banana');
    expect(response.body).toHaveProperty('preco', 15.00);
    expect(response.status).toBe(201);
    expect(response.type).toMatch(/json/)
});

test("Deve retornar status 200 e um JSON no GET", async function() {
    const response = await request.get("/produtos");
    expect(response.status).toBe(200);
    expect(response.type).toMatch(/json/)
    expect(Array.isArray(response.body)).toBe(true);
});

test("Deve retornar status 200 e um JSON no GET id", async function() {
    const response = await request.get("/produtos/1");
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('nome', 'Banana');
    expect(response.body).toHaveProperty('preco', 15.00);
    expect(response.status).toBe(200);
    expect(response.type).toMatch(/json/)
});

test("Deve retornar status 404 e um JSON no GET id", async function() {
    const response = await request.get("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.type).toMatch(/json/);
    expect(response.body).toHaveProperty('msg', "Produto não encontrado")
});

test("Deve retornar status 422 e um JSON no POST", async function() {
    const response = await request.post("/produtos");
    expect(response.status).toBe(422);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body.msg).toBe("Nome e preço do produtos são obrigatórios");
  });

test("Deve retornar status 200 e um JSON no PUT", async function() {
    const response = await request.put("/produtos/1").send({nome: "Banana prata", preco: 18.00});
    expect(response.body).toHaveProperty('id', 2);
    expect(response.body).toHaveProperty('nome', 'Banana Prata');
    expect(response.body).toHaveProperty('preco', 18.00);
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
});

test("Deve retornar status 404 e um JSON no PUT",
async function() {
  const response = await request.put("/produtos/100");
  expect(response.status).toBe(404);
  expect(response.headers['content-type']).toMatch(/json/);
  expect(response.body).toHaveProperty('msg', "Produto não encontrado")
});

test("Deve retornar status 204 e sem Body no DELETE",
async function() {
  const response = await request.delete("/produtos/1");
  expect(response.status).toBe(204);
  expect(response.body).toEqual({});
});

test("Deve retornar status 404 e um JSON no DELETE",
async function() {
  const response = await request.delete("/produtos/100");
  expect(response.status).toBe(404);
  expect(response.headers['content-type']).toMatch(/json/);
  expect(response.body).toHaveProperty('msg', "Produto não encontrado")
});