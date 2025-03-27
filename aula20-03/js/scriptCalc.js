var resultadoVisor = document.getElementById('resultado');

function insert(num)
{
    var numero = resultadoVisor.innerHTML;
    resultadoVisor.innerHTML = numero + num;
}

function clean()
{
    resultadoVisor.innerHTML = "";
}

function apagar()
{
    var resultadoNovo = resultadoVisor.innerHTML;
    resultadoVisor.innerHTML = resultadoNovo.substring(0, resultadoNovo.length -1);
}

function calcular()
{
    var resultadoCalc = resultadoVisor.innerHTML;
    if (resultadoCalc)
    {
        resultadoVisor.innerHTML = eval(resultadoCalc)
    }
}