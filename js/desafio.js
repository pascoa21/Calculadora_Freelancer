/* Lógica inicial
--> Guardar os valores inputados da horas (reais), projeto
--> Definir a função para calcular o valor do projeto
--> Calcular o valor do projeto, e atribuir esse valor a váriável resposta.
Incrementos
--> calcular acrescentando adicional de folga
--> calcular dias trabalhado


*/
var inputValorHora = document.querySelector('#valor-hora');
var inputHorasProjeto = document.querySelector('#horas-projeto');
var resposta = document.querySelector('#resposta');
var inputHorasDia = document.querySelector('#horas-por-dia');
var inputDescription = document.querySelector('#descricao-projeto');
var QntDiasTrabalhado = document.querySelector('#totaldedias');
var descricao = document.getElementById('descricao')

function calcular()
{
   var valorHora = inputValorHora.valueAsNumber;
   var horasProjeto = inputHorasProjeto.valueAsNumber;
   var horasDia = inputHorasDia.valueAsNumber;
   var valorProjeto = (valorHora*horasProjeto).toFixed(2);
   var descansoRemunerado = Math.ceil(horasProjeto/horasDia);
 
   /*Considetando que não se trabalha aos finais de semana*/
   if (descansoRemunerado >= 7) {
      
      descansoRemunerado = descansoRemunerado + 2;
      resposta.textContent = 'R$ ' + valorProjeto.toString().replace('.',',');
      QntDiasTrabalhado.textContent = 'Prazo de ' + descansoRemunerado.toFixed(0) + ' dias.'+ ' Sábado e domingo é lazer.';
      
   } else {
      descansoRemunerado = descansoRemunerado;
      resposta.textContent = 'R$ ' + valorProjeto.toString().replace('.',',');
      QntDiasTrabalhado.textContent = 'Prazo de ' + descansoRemunerado.toFixed(0) + ' dias.';

   }
          
   
   
}
function proposta()
{
   window.location.href = "index.html";
}










