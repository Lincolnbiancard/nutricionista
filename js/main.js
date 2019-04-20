// Mudar titulo 
var titulo = document.querySelector(".titulo");

titulo.textContent = "Bianca Nutrição";

// Pegar Tr e td 
var pacientes = document.querySelectorAll(".paciente");

for(var i= 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso").textContent;

    var tdAltura = paciente.querySelector(".info-altura").textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    // Verificações de peso e altura 
    if(tdPeso <= 0 || tdPeso >= 300){
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
    }
    
    if(tdAltura <= 0 || tdAltura >= 4){
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida!";
    }
    
    if(pesoEhValido && alturaEhValida){
        // calc IMC
        var imc = tdPeso / (tdAltura * 2); 
        tdImc.textContent = imc.toFixed(2);
    }
    
}

