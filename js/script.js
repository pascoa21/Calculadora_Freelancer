/* Comentários
--> Guardar os valores do ganho por mês, e quantidade de horas trabalhadas informadas pelo usuario
--> Definir a quantidade de dias de trabalho
--> Reserva o valor do calculo
--> Definir a função para calcular
--> Guardar o resultado na resposta

*/ 

var inputGanhoMes = document.querySelector('#ganho-mes');
var inputHorasDia = document.querySelector('#horas-dia');
var resposta = document.querySelector('#resposta');

/*Regra de calculo*/

function calcularValorHora(){
    
    var ganhoMes = inputGanhoMes.valueAsNumber;
    var horasDia = inputHorasDia.valueAsNumber;
    var horasMes = horasDia * 22;
    var calcular = (ganhoMes/horasMes).toFixed(2);
        
/*fim de regra de calculo*/

    resposta.textContent = 'R$ '+ calcular.toString().replace('.',',');
}
function proposta(){
    window.location.href = "desafio.html";
}
