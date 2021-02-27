// tipos básicos do typed script

// boolean
let estaPago: boolean = true;

// number
let idade: number = 20;
let valor: number = 29.99;

// string
let empresa: string = "AlgaWorks";

// Template Strings
let nome: string = "João"
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);

let cancatTradicional = "Olá, meu nome é " + nome + " e tenho " + idade + " anos.";
console.log(cancatTradicional);

// arrays
let notas: number[] = [8,6,7,1,9];

// tuple
let alunos: [string, number, string] = ["Joao",10, "Matematica"];
console.log("---------------------------------------");
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

// Enum
enum Cor {Verde, Amarelo, Azul, Branco};
let corFundo: Cor = Cor.Verde;

// Any
console.log("---------------------------------------");
let algumValor: any = 4;
algumValor = "agora é uma string";
algumValor = 15;
algumValor = true;
console.log(algumValor);
// quando usar?
// biblioteca de terceiros
// migração de javascript para typedscript
// array com vários tipos de dados

// void  >>> não retorna nada
function alerga(): void {
    // ... alert("Operacao não permitida");
}

// tipos null e undefined -> Não faz sentido
let u: undefined = undefined;
let n: null = null;
// null e undefined são tipos dos outros tipos 
nome = null;
nome = undefined;