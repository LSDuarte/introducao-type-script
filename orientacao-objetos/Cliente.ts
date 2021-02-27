class Cliente {
    nome: string;
    idade: number;

    // chama apenas quando está construindo o objeto.
    // apenas 1 construtor
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`;
    }
}

let joao: Cliente = new Cliente("João", 25);
let apresentacao: string = joao.apresentar();
console.log(apresentacao);
console.log("----------------------------");
let maria: Cliente = new Cliente("Maria", 30);
console.log(maria.apresentar);