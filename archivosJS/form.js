let infoForm = [];

class Datos {
  constructor(nombre, tel, correo) {
    this.nombre = nombre;
    this.tel = tel;
    this.correo = correo;
  }
}

const formulario = document.querySelector("#formulario");
const button = document.querySelector("#submitButton");

//crear el evento
formulario.addEventListener("submit", validarFormulario);

//funcion de validacion
function validarFormulario(e) {
  e.preventDefault();
  let nombre = document.querySelector("#nombre").value;
  let tel = document.querySelector("#tel").value;
  let correo = document.querySelector("#correo").value;

  const respuesta = document.getElementById("respuesta");

  respuesta.textContent = `Hola ${nombre}, Gracias por comprar con nosotros. En breve nos contactaremos contigo al tel:${tel} y/o correo:${correo} para definir el modo de pago. Esperamos verte pronto..`;

  Swal.fire({
    position: "center",
    icon: "success",
    html: `<span class="swal-title"> Hola ${nombre}, Gracias por comprar con nosotros. En breve nos contactaremos contigo al tel:${tel} y/o correo:${correo} para definir el modo de pago. Esperamos verte pronto..</span>`,
    background: "rgba(0, 0, 0, 0.265)",
    confirmButtonText: "Ok",
    showConfirmButton: true,
  });

  infoForm.push(new Datos(nombre, tel, correo));

  sessionStorage.setItem("guardarForm", JSON.stringify(infoForm));
}

const guardarForm = JSON.parse(sessionStorage.getItem("guardarForm"));
