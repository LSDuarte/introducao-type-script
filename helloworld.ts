// código java script
function dizerOla(nome) {
    console.log('Olá, ' + nome);
}
dizerOla('AlgaWorks | Java Script');

//typed script
function dizerOi(nome: string) {
    console.log(`Olá, ${nome}`); //parametro
}
// dizerOi(4); não compila pois tipamos a variavel em typedscript como nome: string
dizerOi('AlgaWorks | Typed Script');