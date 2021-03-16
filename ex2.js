/* Solicite o usuário a 
inserção de notas via prompt e calcule a 
média de diversas notas digitadas em um input, 
separados por vírgula, pelo usuário */

function calcularMedia(notas_string) {
    //console.log(notas_string)
    let notas = notas_string.split(",");
    //console.log(notas);
    let soma =0;
    for (let i=0;i<notas.length;i++) {
        soma = soma + Number(notas[i]);
    }
    let media = soma/notas.length;
    return media;
}

let notas = prompt("Digite notas separadas por vírgula",0);
console.log(calcularMedia(notas));