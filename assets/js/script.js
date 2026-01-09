// trata a entrada do usuário, substituindo vírgulas por pontos e validando o formato numérico
function sanitizeNumberInput(value) {
    const s = String(value).trim().replace(',', '.');
    if (!/^\d+(\.\d+)?$/.test(s)) return NaN; 
    return parseFloat(s);
}

// interpreta a altura, convertendo centímetros para metros se necessário
function parseHeight(value) {
    const n = sanitizeNumberInput(value);
    if (Number.isNaN(n)) return NaN;
    // heurística: se o valor for maior que 3, provavelmente está em centímetros
    if (n > 3) return n / 100;
    return n;
}

// calcula o IMC e atualiza a interface com a classificação correspondente
function calcularIMC() {
    const pesoInput = document.querySelector('input[placeholder="Digite o peso (ex: 70,5)"]').value;
    const alturaInput = document.querySelector('input[placeholder="Digite a altura (ex: 1,75)"]').value;

    const peso = sanitizeNumberInput(pesoInput);
    const altura = parseHeight(alturaInput);

    if (Number.isNaN(peso) || Number.isNaN(altura) || altura === 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    const imc = peso / (altura * altura);

    if (imc < 16) {
        document.querySelector('.alert').className = 'alert alert-danger';
        document.querySelector('.alert').textContent = `Seu IMC é: ${imc.toFixed(2)} → Magreza grave.`;
    } else if (imc >= 16 && imc < 16.9) {
        document.querySelector('.alert').className = 'alert alert-warning';
        document.querySelector('.alert').textContent = `Seu IMC é: ${imc.toFixed(2)} → Magreza moderada.`;
    } else if (imc >= 17 && imc < 18.5) {
        document.querySelector('.alert').className = 'alert alert-info';
        document.querySelector('.alert').textContent = `Seu IMC é: ${imc.toFixed(2)} → Abaixo do peso.`;
    } else if (imc >= 18.5 && imc < 24.9) {
        document.querySelector('.alert').className = 'alert alert-success';
        document.querySelector('.alert').textContent = `Seu IMC é: ${imc.toFixed(2)} → Peso normal.`;
    } else if (imc >= 25 && imc < 29.9) {
        document.querySelector('.alert').className = 'alert alert-primary';
        document.querySelector('.alert').textContent = `Seu IMC é: ${imc.toFixed(2)} → Sobrepeso.`;
    } else if (imc >= 30 && imc < 34.9) {
        document.querySelector('.alert').className = 'alert alert-dark';
        document.querySelector('.alert').textContent = `Seu IMC é: ${imc.toFixed(2)} → Obesidade moderada.`;
    } else if (imc >= 35 && imc < 39.9) {
        document.querySelector('.alert').className = 'alert alert-warning';
        document.querySelector('.alert').textContent = `Seu IMC é: ${imc.toFixed(2)} → Obesidade severa.`;
    } else {
        document.querySelector('.alert').className = 'alert alert-danger';
        document.querySelector('.alert').textContent = `Seu IMC é: ${imc.toFixed(2)} → Obesidade mórbida.`;
    }
    document.querySelector('.alert').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', calcularIMC);
});