// criando função reduzida, código mais legivel

// como seria
const precos = ["10","23","19", "21"];
const precosEmReais = precos.map(function(preco) {
    return "R$:" + preco + ",00";
})
console.log(precosEmReais);
console.log("-----------------------------------------------");

// arrow funcitions
const precosEmReais2 = precos.map(preco => "R$: " + preco + ",00");
console.log(precosEmReais2);
console.log("-----------------------------------------------");

const acimaDeVinte = precos
        .filter(preco => preco > 20)
        .map(preco => "R$:" + preco + ",00");
console.log(acimaDeVinte);
