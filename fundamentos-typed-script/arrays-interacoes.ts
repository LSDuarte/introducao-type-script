// arrays

let notasAlunos: number[] = [10,8,8.5,7];

// indices - in
for (let i in notasAlunos) {
    console.log("indice do array: " + i);
}
console.log("------------------------------------");
// valores
for(let nota of notasAlunos){
    console.log("Nota: " + nota);
}