const boton = document.getElementById("resultado");

boton.addEventListener("click", () => {
  const estatura = parseFloat(document.getElementById("estatura").value);
  const peso = parseFloat(document.getElementById("peso").value);

  let imc = peso / (estatura * estatura);
  alert(imc.toFixed(2));
  console.log(imc);
});
