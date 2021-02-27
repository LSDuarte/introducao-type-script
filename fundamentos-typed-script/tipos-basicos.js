// tipos básicos do typed script
// boolean
var estaPago = true;
// number
var idade = 20;
var valor = 29.99;
// string
var empresa = "AlgaWorks";
// Template Strings
var nome = "João";
console.log("Ol\u00E1, meu nome \u00E9 " + nome + " e tenho " + idade + " anos.");
var cancatTradicional = "Olá, meu nome é " + nome + " e tenho " + idade + " anos.";
console.log(cancatTradicional);
// arrays
var notas = [8, 6, 7, 1, 9];
// tuple
var alunos = ["Joao", 10, "Matematica"];
console.log("---------------------------------------");
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
// Enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
;
var corFundo = Cor.Verde;
// Any
console.log("---------------------------------------");
var algumValor = 4;
algumValor = "agora é uma string";
algumValor = 15;
algumValor = true;
console.log(algumValor);
// quando usar?
// biblioteca de terceiros
// migração de javascript para typedscript
// array com vários tipos de dados
// void  >>> não retorna nada
function alerga() {
    // ... alert("Operacao não permitida");
}
// tipos null e undefined -> Não faz sentido
var u = undefined;
var n = null;
// null e undefined são tipos dos outros tipos 
nome = null;
nome = undefined;
