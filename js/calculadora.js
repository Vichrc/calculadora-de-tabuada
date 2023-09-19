function tabuada(){

/*
    Capturando as informações do DOM
*/
var num1 = window.document.getElementById('num1');
var num2 = window.document.getElementById('num2');
var text = window.document.getElementById('text');


/********************************
    Organizando os dados capturados
*********************************/

/* 
    Apos capturar o elemento DOM atraves do ID indicado no HTML,
    é feito a conversão do 'value' do tipo da variavel para númerico,
    e esse valor é atribuido a uma nova variavel para a execução de calculos e etc.
*/
var n1 = Number(num1.value); 
var n2 = Number(num2.value);
var x = 0 /* Valor que indicara em qual parte da tabuada o sistema deve parar */
var res = ''; /* Variavel que vai guardar a resposta do calculo */

if(n1 == 0 || n2 == 0){
    alert('Prencha os campos com números maiores que ZERO')
} else{

text.innerHTML = (`A tabuada do ${n1} é: <br> <hr style="margin-left: auto; margin-right: auto; width: 85%; border: 1px solid ;">`);


/********************************
    Execultando comando de repetição 
*********************************/
do{
    res = x * n1;
    text.innerHTML +=  `${x} x ${n1} = ${res} <br>`
    ++x
} while (x <= n2);

}}