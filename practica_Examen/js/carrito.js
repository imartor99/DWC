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
      return JSON.parse(carritoGuardado); // Convertir de JSON a array
    } else {
      return []; // Si no hay nada guardado, array vacío
    }
  }

  guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(this.articulos)); //JSON.stringify convierte el array en un string
  }
}
