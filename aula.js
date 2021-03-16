let usuario = 'Ramon';
const server = 'digitalservidor';

// var usuario = 'Ramon';
usuario = 'joao';
console.log(usuario);
usuario = 2;

console.log(usuario);

// server = 'novoserver';

let numero = 2;
let num2 = "2";
let soma = numero + Number(num2); // 22

let time = { 
    nome: "Cruzeirão Cabuloso",
    titulos: "Perdi as contas",
    cidade: "Belo Horizonte",
    anoNasc: 1921,
    presidente: {
        nome: "Sergio Rodrigues",
        inicioMandato: 2020,
        fimMandato: 2022,
        idade: 60
    },
    estadio: "Mineirão",
    patrimonio: ["Sede Campestre", "Toca da Raposa 1", "Toca da Raposa 2", "Sede Barro Preto"]
};  

console.log(time);

let time2 = {
    nome: "Atlético MG",
    titulos: "Não tem BI",
    cidade: "Vespasiano",
    estadio: "Estádio do América",
    cantarHino: function(valor) {
        console.log("Hino cantado " + valor + " vezes");
    }
}

let times = [time,time2];

console.log(times);

let times2 = [
    {
        nome: "Cruzeiro",
        cidade: "BH"
    },
    {
        nome: "Atlético",
        cidade: "Vespasiano"
    }
];

function calcularIMC(peso,altura) {
    let imc = peso/(altura**2);  
    return imc;  
}

let peso = 20;
let altura = 1.2;
let imc = calcularIMC(peso,altura);
console.log(imc);

function validaCPF(cpf) {
    console.log("O tamanho do cpf é: " + cpf.length);
    if (cpf.length != 11) {
        return false
    }
    return true;
}

let cpf = "12345678911";
console.log(validaCPF(cpf));

let log = function (msg) {
    console.log(msg);
};