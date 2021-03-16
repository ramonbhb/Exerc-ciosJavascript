/* Crie um array de notas e 
calcule a média de todas essas notas e exiba no console. */

function calcularMedia(notas) {
    let soma=0;
    for (let i=0;i<notas.length;i++) {
        soma = soma + notas[i];
    }
    let media = soma/notas.length;    
    return media;
}

let notas = [7,8,9,10,2];
let notas2 = [20,30,40,50];

console.log(calcularMedia(notas));
console.log(calcularMedia(notas2));

