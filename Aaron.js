let inputs =document.querySelectorAll(".valor");

inputs.forEach(function mostrarvalor(input){
   input.value = input.dataset.cambio;
});


function valormodificado(input){
let factor = input.value / input.dataset.cambio;

inputs.forEach(function mostrarvalor(input){
    input.value = (input.dataset.cambio * factor).toFixed(2);
 });
}