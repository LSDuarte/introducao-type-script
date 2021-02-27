// inferencia

let quantidade = 20;
// quantidade = ""; erro porque é do tipo number mesmo não tipando a variavel

let x = [1,2, null];
// x[0] = true; não compila, tipo do array é number

// Contextual Typing
// window.onmousedown = function(evento: MouseEvent) {
window.onmousedown = function(evento) {
    console.log(evento.button);// ok
  //  console.log(evento.buton);// não compila
}
// boa pratica, coloque a tipagem