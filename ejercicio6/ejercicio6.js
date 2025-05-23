boton.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = parseFloat(document.getElementById("edad").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const correo = document.getElementById("correo").value;
  //   const boton = document.getElementById("boton");
  const p = document.getElementById("p");
  console.log(p);

  if (nombre === "" || nombre.lenght > 50) {
    p.innerHTML = "El nombre no puede estar vacío y debe ser de un máximo de 50 caracteres.";
    p.classList.add("error");
    return;
  }
  if (apellido === "" || apellido.lenght > 50) {
    p.innerHTML = "El apellido no puede estar vacío y debe ser de un máximo de 50 caracteres";
    p.classList.add("error");
    return;
  }
  if (edad < 0 || edad < 18 || isNaN(edad)) {
    p.innerHTML = "La edad no debe ser negativa y debe ser mayor o igual a 18 años.";
    p.classList.add("error");
    return;
  }
  if (altura < 0 || altura > 230 || isNaN(altura)) {
    p.innerHTML = "La altura no puede ser negativa ni mayor a 230 cm. o estar vacío";
    p.classList.add("error");
    return;
  }
  if (correo === "" || !correo.includes("@")) {
    p.innerHTML = "El campo correo no puede estar vacío y debe incluír '@'.";
    p.classList.add("error");
    return;
  }
  p.innerHTML = `
  <strong>Datos ingresados y aprobados:</strong> <br>
  Nombre: ${nombre} <br>
  Apellido: ${apellido} <br>
  Edad: ${edad} años<br>
  Altura: ${altura} cm.<br>
  Correo: ${correo}
  `;
  p.classList.add("exito");
});
