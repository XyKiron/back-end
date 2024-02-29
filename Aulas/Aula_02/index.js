const readline = require('readline-sync');

const controlador = require('./controlador')

function Menu(){
    console.log('1. listar');
    console.log('2. criar');
    console.log('3. buscar');
    console.log('4. atualizar');
    console.log('5. remover');
    console.log('6. sair');
}
function Escolha(opcao){
    switch(opcao){
        case '1' :
            controlador.Listar()
        break;
        case '2' :
            controlador.Criar()    
        break;
        case '3' :
            controlador.Buscar()    
        break;
        case '4' :
            controlador.Atualizar()
        break;
        case '5' :
            controlador.Remover()    
        break;
        case '6' : Process.exit(0);
        default: console.log('opcão invalida');
    }
}
function main(){
    while (true){
        Menu();
        const opcao = readline.question("Entre com uma opcão:")
        Escolha(opcao)
    }
}
main();
