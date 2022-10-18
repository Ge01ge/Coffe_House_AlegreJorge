let carrito = [];

async function fetchProductos() {
  const response = await fetch("./archivosJS/data.json");
  return await response.json();
}
let stock = [];

fetchProductos().then((productos) => {
  stock = productos;
  mostrarCatalogo();
});

let tienda = document.querySelector("div#tienda");
let lista = document.querySelector("div#listaStock");
let temp = document.querySelector("template");
let card = temp.content.querySelector(".card");
let contadorCarrito = document.querySelector("span#contadorCarrito");

let verCarrito = document.querySelector("#verCarrito");
verCarrito.className = "ver-carrito";
let modalContainer = document.querySelector("#modalContainer");

function mostrarCatalogo() {
  stock.forEach((elm) => {
    let cardClon = card.cloneNode(true);

    cardClon.querySelector("h5").innerText = elm.nombre;
    cardClon.querySelector("p").innerText = elm.calidCantidad;
    cardClon.querySelector("h4").innerText = "$" + elm.precio;
    cardClon.querySelector("button").innerText = "comprar";

    lista.appendChild(cardClon);

    cardClon.children[0].src = elm.img;

    // function sendCarrito()
    cardClon
      .querySelector("button")
      .addEventListener("click", function sendCarrito() {
        let productoId = elm.id;
        let cantidad = elm.cantidad;

        const repeat = carrito.some(
          (repeatProduct) => repeatProduct.id === elm.id
        );
        if (repeat) {
          carrito.map((prod) => {
            if (prod.id === elm.id) {
              prod.cantidad++;
            }
          });
        } else {
          let producto = stock.find((product) => product.id === productoId);
          producto.total = producto.precio * cantidad;
          carrito.push(producto);
        }
        // console.log(carrito)

        carritoCounter();

        Swal.fire({
          position: "center",
          icon: "success",
          title: `<span class="swal-title">Se a Agregado el producto al tu Carrito </span>`,
          background: "rgba(0, 0, 0, 0.265)",
          showConfirmButton: false,
          timer: 1500,
        });

        localStorage.setItem("guardarCarrito", JSON.stringify(carrito));
        const carrito1 = JSON.parse(localStorage.getItem("guardarCarrito"));
      });
  });
}
