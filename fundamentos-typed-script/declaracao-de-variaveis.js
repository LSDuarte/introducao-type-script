// var. let e const
// >> exemplo utilizando 'var' | raramente ou muito especifico irá usar
function iniciarTimeVar(iniciarJogo) {
    var nome = "Messi e Amigos";
    // >>> hoisting <<<
    // var cidade;
    if (iniciarJogo) {
        // cidade = 'em Uberlândia.';
        var cidade = 'em Uberlândia.';
    }
    console.log(nome + " v\u00E3o jogar " + cidade);
}
iniciarTimeVar(true); // Messi e Amigos vão jogar em Uberlândia.
iniciarTimeVar(false); // Messi e Amigos vão jogar undefined
console.log("---------------------------------------------------------");
// >> exemplo utilizando 'let'
function iniciarTimeLet(iniciarJogo) {
    var nome = "Messi e Amigos";
    var cidade = "em São Paulo";
    if (iniciarJogo) {
        // let cidade = 'em Uberlândia.';
        cidade = 'em Uberlândia.';
    }
    console.log(nome + " v\u00E3o jogar " + cidade); // não consegue encontrar variavel cidade.
}
iniciarTimeLet(true); // Messi e Amigos vão jogar em Uberlândia.
iniciarTimeLet(false); // Messi e Amigos vão jogar em São Paulo
console.log("---------------------------------------------------------");
// >> exemplo utilizando 'const'
function iniciarTimeConst(iniciarJogo) {
    var nome = "Messi e Amigos";
    var cidade = "em São Paulo";
    if (iniciarJogo) {
        // let cidade = 'em Uberlândia.';
        cidade = 'em Uberlândia.';
    }
    // nome = "amigos"; não compila pois é uma constante 
    console.log(nome + " v\u00E3o jogar " + cidade);
}
iniciarTimeConst(true); // Messi e Amigos vão jogar em Uberlândia.
iniciarTimeConst(false); // Messi e Amigos vão jogar undefined
