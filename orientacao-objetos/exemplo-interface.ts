interface Pessoa {
    idade: number;
    sexo?: string; // ? significa que não é obrigatório 
}

function imprimirIdade(pessoa: Pessoa) {
    console.log(pessoa.idade);
}
let joaoMarcos = {nome: "João Marcos", idade: 22};
imprimirIdade(joaoMarcos);