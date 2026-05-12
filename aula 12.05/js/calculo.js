var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var resultado = document.getElementById("resultado");

function somar() {
    resultado.innerHTML = Number(n1.value) + Number(n2.value);
}

function subtrair() {
    resultado.innerHTML = Number(n1.value) - Number(n2.value);
}
function multiplicar() {
    resultado.innerHTML = Number(n1.value) * Number(n2.value);
    
}
function dividir() {
    Number(n1.value) / Number(n2.value);
    if (n1.value == 0 || n2.value == 0){
        resultado.innerHTML = 'Erro divisão por 0'
    }
    else {
        resultado.innerHTML = Number(n1.value) / Number(n2.value);
    }
}
function areaT() {
    resultado.innerHTML = (Number(n1.value) * Number(n2.value)) / 2;
}
function areaQ() {
    if (n1.value != n2.value){
        resultado.innerHTML = 'Os lados devem ser iguais'
    }else{
    resultado.innerHTML = Number(n1.value) * Number(n1.value);
    }
}
function idade() {
    if(n1.value < 18){
        resultado.innerHTML = 'Menor de idade';
    }else {
        resultado.innerHTML = 'Maior de idade';
    }
}
function par() {
    if ((n1.value % 2) == 0){
        resultado.innerHTML = 'Par'
    }else{
        resultado.innerHTML = 'Impar'
    }
}

function retirar() {
    resultado.innerHTML = Number(n1.value) * 0.10
}

function lucro() {
    resultado.innerHTML = Number(n1.value) * 1.15
}

function desconto() {
    resultado.innerHTML = Number(n1.value) * 0.97
}

function desconto2() {
    if(n1.value > 1000){
    resultado.innerHTML = Number(n1.value) * 0.93
    }else {
        resultado.innerHTML = 'Menor que 1000';
    }
}

function lucro2() {
    if(n1.value <= 500){
    resultado.innerHTML = Number(n1.value) * 1.05
    }else {
        resultado.innerHTML = 'Maior que 500';
    }
}

function boascompras() {
    if(n1.value <= 200){
        resultado.innerHTML = 'Boas Compras!'
    }else {
        resultado.innerHTML = Number(n1.value);
    }
}
