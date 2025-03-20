const form = document.getElementById('formCalc');
var inputNum1 = document.getElementById('inputNum1');
var inputNum2 = document.getElementById('inputNum2');


form.addEventListener('submit', function(evento){
    evento.preventDefault();

    var Num1 = inputNum1.value.trim();
    var Num2 = inputNum2.value.trim();

    if(Num1 && Num2 != ''){
        var Result = Num1 + Num2;
        inputResult = document.createElement('input');
        inputResult.textContent = Result;
        inputNum1.value = '';
        inputNum2.value = '';
    }
});