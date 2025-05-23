const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
  const lado1 = parseFloat(document.getElementById("lado1").value);
  const lado2 = parseFloat(document.getElementById("lado2").value);
  const lado3 = parseFloat(document.getElementById("lado3").value);
  const lado4 = parseFloat(document.getElementById("lado4").value);

  let area = lado1 + lado2 + lado3 + lado4;

  resultado.innerHTML = "Resultado de área: " + area + " metros.";
});
// console.log(area);
