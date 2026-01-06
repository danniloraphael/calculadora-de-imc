function calcularIMC() {
    const pesoInput = document.querySelector('input[placeholder="Digite o peso (ex: 70,5)"]').value;
    const alturaInput = document.querySelector('input[placeholder="Digite a altura (ex: 1,75)"]').value;

    const peso = parseFloat(pesoInput.trim().replace(',', '.'));
    const altura = parseFloat(alturaInput.trim().replace(',', '.'));

    if (isNaN(peso) || isNaN(altura) || altura === 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    const imc = peso / (altura * altura);

    if (imc < 18.5) {
        document.querySelector('.alert').className = 'alert alert-warning';
        document.querySelector('.alert').textContent ='Seu IMC é: ' + imc.toFixed(2) + ' → Abaixo do peso.';
    } else if (imc >= 18.5 && imc < 24.9) {
        document.querySelector('.alert').className = 'alert alert-success';
        document.querySelector('.alert').textContent = 'Seu IMC é: ' + imc.toFixed(2) + ' → Peso normal.';
    } else if (imc >= 25 && imc < 29.9) {
        document.querySelector('.alert').className = 'alert alert-info';
        document.querySelector('.alert').textContent = 'Seu IMC é: ' + imc.toFixed(2) + ' → Sobrepeso.';
    }else if (imc >= 30 && imc < 34.9) {
        document.querySelector('.alert').className = 'alert alert-secondary';
        document.querySelector('.alert').textContent = 'Seu IMC é: ' + imc.toFixed(2) + ' → Obesidade grau I.';
    } else if (imc >= 35 && imc < 39.9) {
        document.querySelector('.alert').className = 'alert alert-dark';
        document.querySelector('.alert').textContent = 'Seu IMC é: ' + imc.toFixed(2) + ' → Obesidade grau II.';
    } else {
        document.querySelector('.alert').className = 'alert alert-danger';
        document.querySelector('.alert').textContent = 'Seu IMC é: ' + imc.toFixed(2) + ' → Obesidade Grave.';
    }
    document.querySelector('.alert').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', calcularIMC);
});