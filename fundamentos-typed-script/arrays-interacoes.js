// arrays
var notasAlunos = [10, 8, 8.5, 7];
// indices - in
for (var i in notasAlunos) {
    console.log("indice do array: " + i);
}
console.log("------------------------------------");
// valores
for (var _i = 0, notasAlunos_1 = notasAlunos; _i < notasAlunos_1.length; _i++) {
    var nota = notasAlunos_1[_i];
    console.log("Nota: " + nota);
}
