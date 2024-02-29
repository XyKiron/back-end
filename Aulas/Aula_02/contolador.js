const Produtos = [];

function Criar() {
    const nome = readline.question("Informe o nome do produto :");
    const preco = readline.question("Informe o preco :");
    const novo = {nome, preco};
    Produtos.push(novo);
}

function Listar() {
    Produtos.forEach((produto) => 
    console.log(produto.nome, "-", produto.preco));
}

function Buscar(){
    const nome = readline.question("Informe o nome do produto: ");
    const buscar = Produtos.find(produto => produto.nome === nome);
    if (buscar) {
        console.log(buscar.nome, '-', buscar.preco);
    } else {
        console.log("Produto nao encontrado");
    }
}

function Atualizar(){
    const nome = readline.question("Informe o nome do produto: ");
    const buscar = Produtos.find(produto => produto.nome === nome);
    if (buscar) {
        const outro_nome =
        readline.question("Informe outro nome para o produto: ");
        const outro_preco =
        readline.question("Informe outro preco para o produto: ");
        buscar.nome = outro_nome;
        buscar.preco = outro_preco
    } else {
        console.log("Produto nao encontrado");
    }
}

function Remover() {
    const nome = readline.question("Informe o nome do produto: ");
    const posicao =  Produtos.findIndex((produto) => produto.nome === nome);
    if (posicao >= 0){
        produtos.splice(posicao, 1);
    } else {
        console.log("Produto nao encontrado");
    }
}

module.exports = {Criar, Listar, Buscar, Atualizar, Remover};