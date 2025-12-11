export class Carrito {
  constructor() {
    this.articulos = this.cargarCarrito();
  }

  add(elemento) {
    this.articulos.push(elemento);
    this.guardarCarrito();
  }

  dibujarCarrito() {
    const fragment = document.createDocumentFragment();

    if (this.articulos.length === 0) {
      const textCarrito = document.createElement("p");
      textCarrito.textContent = "No hay productos en el carrito";
      fragment.appendChild(textCarrito);
    } else {
      const listaCarro = document.createElement("ul");
      this.articulos.forEach((producto) => {
        const articulo = document.createElement("li");
        articulo.innerHTML = `Producto: ${producto.title}`;
        listaCarro.appendChild(articulo);
      });
      fragment.appendChild(listaCarro);
    }

    return fragment;
  }

  cargarCarrito() {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      return JSON.parse(carritoGuardado);
    } else {
      return [];
    }
  }

  guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(this.articulos));
  }
}
