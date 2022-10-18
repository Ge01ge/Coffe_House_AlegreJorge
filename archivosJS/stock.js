class Producto {
  constructor(nombre, precio, id, calidCantidad, img, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
    this.calidCantidad = calidCantidad;
    this.img = img;
    this.cantidad = cantidad;
  }
}

const stock = [];

// alt + 96 = ` (acento grave)

stock.push(
  new Producto(
    "grano Liberico",
    300,
    1,
    " (100gr) calidad Premium",
    (img =
      "https://incapto.com/wp-content/uploads/2021/04/UTB884cHm22JXKJkSanrq6y3lVXaI.jpg"),
    1
  )
);
stock.push(
  new Producto(
    "grano Robusto",
    400,
    2,
    " (100gr) calidad Premium",
    (img =
      "https://previews.123rf.com/images/cjung/cjung1301/cjung130100036/17169745-grains-de-caf%C3%A9-robusta-.jpg"),
    1
  )
);
stock.push(
  new Producto(
    "grano Arabico",
    250,
    3,
    " (100gr) calidad Premium",
    (img =
      "https://thumbs.dreamstime.com/b/granos-de-caf%C3%A9-arabica-28189044.jpg"),
    1
  )
);
stock.push(
  new Producto(
    "NesCafe classic",
    700,
    4,
    "500gr",
    (img =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKFFBFpXbwmSnBtR9BQSTY9RZ-JMe4PsnSklExL9KATUtNIpdqUbCCFQWxsj4sIjRRbo&usqp=CAU"),
    1
  )
);
stock.push(
  new Producto(
    "La Virginia",
    800,
    5,
    "500gr",
    (img =
      "https://http2.mlstatic.com/D_NQ_NP_633921-MLA46584462543_072021-O.jpg"),
    1
  )
);
stock.push(
  new Producto(
    "Batidor de Cafe",
    1000,
    6,
    "Unidad",
    (img = "https://cf.shopee.com.mx/file/5858232d7dae9ba612bbe4326476f7c1"),
    1
  )
);
stock.push(
  new Producto(
    "set tazas de cafe Blanca ",
    1800,
    7,
    "6 Unidades",
    (img = "https://m.media-amazon.com/images/I/610z+-iQ9gL._AC_SX522_.jpg"),
    1
  )
);
stock.push(
  new Producto(
    "set tazas Café Irlandés/ Capuchino (230 Ml)",
    3800,
    8,
    "6 Unidades",
    (img =
      "https://http2.mlstatic.com/D_NQ_NP_725925-MLC50128052307_052022-O.webp"),
    1
  )
);
