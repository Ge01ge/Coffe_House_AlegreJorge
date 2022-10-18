const pintarCarrito = () => {
  modalContainer.innerText = "";
  modalContainer.style.display = "flex";
  const modalButton = document.createElement("h2");
  modalButton.className = "modal-header-button";
  modalButton.innerText = "❌";

  modalButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalContainer.appendChild(modalButton);

  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `<h1 class="modal-header-title"> Tu Carrito</h1>`;

  modalContainer.appendChild(modalHeader);

  carrito.forEach((elm) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
      <img src="${elm.img}">
      <h5 class="card-title">${elm.nombre}</h5>
      <h4 style="text-align:center;">$${elm.precio} * ${
      elm.cantidad
    } Unidades =$${elm.precio * elm.cantidad}</h4>`;

    modalContainer.appendChild(carritoContent);

    let eliminar = document.createElement("span");
    eliminar.innerText = "❌";
    eliminar.className = "eliminar-product";
    carritoContent.appendChild(eliminar);

    eliminar.addEventListener("click", elimProducto);
  });

  function calcularTotal(carrito) {
    let total = 0;
    carrito.forEach((elm) => {
      total += elm.precio * elm.cantidad;
    });
    return total;
  }

  const total = calcularTotal(carrito);
  let totaletiquet = document.createElement("div");
  totaletiquet.className = "total-content";
  totaletiquet.innerHTML = `Tu Total a Pagar es: $${total} <br>
    <a href="#formulario" class=" renderizar"> ¿Terminaste de comprar? <br>👉Completa el formulario de Contacto👈</a>
    `;
  modalContainer.appendChild(totaletiquet);
};

verCarrito.addEventListener("click", pintarCarrito);

function elimProducto() {
  const buscarId = carrito.find((elem) => elem.id);
  carrito = carrito.filter((carritoId) => {
    return carritoId !== buscarId;
  });

  carritoCounter();
  pintarCarrito();
}

const carritoCounter = () => {
  contadorCarrito.style.display = "block";
  contadorCarrito.innerText = carrito.length;
};
