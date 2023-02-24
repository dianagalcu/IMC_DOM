const btnCalcular = document.querySelector("#btnCalcular");

const calcularImc = () => {
  const peso = document.querySelector("#peso");
  const altura = document.querySelector("#altura");
  const resultado = document.querySelector("#resultado");
  const imagen = document.querySelector("#imagen");
  const imc =
    parseFloat(peso.value) /
    (parseFloat(altura.value) * parseFloat(altura.value));
  if (imc.toFixed(2) < 18.5) {
    resultado.textContent = imc.toFixed(2);
    imagen.src = "./img/BajoPeso.png";
  } else if (imc.toFixed(2) < 24.9) {
    resultado.textContent = imc.toFixed(2);
    imagen.src = "./img/Normal.png";
  } else if(imc.toFixed(2) < 34.9) {
    resultado.textContent = imc.toFixed(2);
    imagen.src = "./img/SobrePeso.png";
  } else {
    resultado.textContent = imc.toFixed(2);
    imagen.src = "./img/Obeso.png";
  }
}; 

btnCalcular.addEventListener("click", calcularImc);

const btnBorrar = document.querySelector("#btnBorrar");

const borrarImc = () =>{
  const peso = document.querySelector("#peso");
  peso.value= "";
  const altura = document.querySelector("#altura");
  altura.value = "";
  const resultado = document.querySelector("#resultado");
  resultado.textContent = "";
  const imagen = document.querySelector("#imagen");
  imagen.src = "";
}

btnBorrar.addEventListener("click", borrarImc);




