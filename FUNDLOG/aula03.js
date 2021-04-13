function soma() {
    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')
    let soma = parseInt(num1.value) + parseInt(num2.value)
    window.alert('O resultado da operação: ' + num1.value + ' + ' +
     num2.value +' é igual a ' + soma)
}


function subtracao() {
    let num3 = document.getElementById('num3')
    let num4 = document.getElementById('num4')
    let subtracao = parseInt(num3.value) - parseInt(num4.value)
    window.alert('O resultado da operação:  ' + num3.value + ' - ' +
     num4.value +' é igual a ' + subtracao)
}


function multiplicacao() {
    let num5 = document.getElementById('num5')
    let num6 = document.getElementById('num6')
    let multiplicacao = parseInt(num5.value) * parseInt(num6.value)
    window.alert('O resultado da operação:  ' + num5.value + ' * ' +
     num6.value +' é igual a ' + multiplicacao)
}
function divisao() {
    let num7 = document.getElementById('num7')
    let num8 = document.getElementById('num8')
    let divisao = parseInt(num7.value) / parseInt(num8.value)
    window.alert('O resultado da operação:  ' + num7.value + ' / ' +
     num8.value +' é igual a ' + divisao)
}
