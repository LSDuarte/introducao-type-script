// template strings
const acimaDeVinte = precos
        .filter(preco => preco > 20)
        .map(preco => `R$ ${preco},00`) // `R$ ${preco},00` >> template
console.log(acimaDeVinte);
