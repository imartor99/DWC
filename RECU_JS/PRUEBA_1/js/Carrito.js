export class Carrito {
  constructor() {
    this.articulos = this.cargarCarrito();
  }

  //metodos

  guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(this.articulos));
  }

  cargarCarrito() {
    const carrito = localStorage.getItem("carrito");
    return carrito ? JSON.parse(carrito) : [];
  }

  add(elemento) {
    const elementoExistente = this.articulos.find((a) => a.id === elemento.id);

    if (elementoExistente) {
      elementoExistente.cantidad++;
    } else {
      elemento.cantidad = 1;

      this.articulos.push(elemento);
    }

    this.guardarCarrito();
  }

  restar(id) {
    const elementoExistente = this.articulos.find((a) => a.id === id);

    if (elementoExistente) {
      elementoExistente.cantidad--;

      if (elementoExistente.cantidad === 0)
        this.articulos = this.articulos.filter((a) => a.id !== id);
    }

    this.guardarCarrito();
  }

  eliminar(id) {
    this.articulos = this.articulos.filter((a) => a.id !== id);
    this.guardarCarrito();
  }

  vaciar() {
    this.articulos = [];
    this.guardarCarrito();
  }

  obtenerTotal() {
    const total = this.articulos.reduce(
      (total, articulo) => total + articulo.price + articulo.cantidad,
      0
    );
    return total.toFixed(2);
  }

  dibujaCarrito() {
    const fragment = document.createDocumentFragment();

    //CABECERA
    const cabecera = document.createElement("h3");
    cabecera.textContent = `Total carrito: ${this.obtenerTotal()}€`;
    fragment.appendChild(cabecera);

    //CARRO VACIO
    if (this.articulos.length === 0) {
      const mensajeVacio = document.createElement("p");
      mensajeVacio.textContent = "No hay objetos en el carrito";
      fragment.appendChild(mensajeVacio);
      return fragment;
    }

    //HAY PRODUCTOS, CREAMOS LISTA
    const lista = document.createElement("ul");

    this.articulos.forEach((producto) => {
      const li = document.createElement("li");
      li.style.listStyle = "none";

      // Info básica
      const info = document.createElement("span");
      info.textContent = `${producto.title} - ${producto.price}€ `;
      li.appendChild(info);

      // --- BOTONES DE ACCIÓN ---

      // Botón Restar [-]
      const btnRestar = document.createElement("button");
      btnRestar.textContent = "-";
      btnRestar.dataset.id = producto.id; // ¿Quién soy?
      btnRestar.dataset.accion = "restar"; // ¿Qué hago?
      li.appendChild(btnRestar);

      // Cantidad (solo texto)
      const cantidad = document.createElement("span");
      cantidad.textContent = ` Cant: ${producto.cantidad} `;
      li.appendChild(cantidad);

      // Botón Sumar [+]
      const btnSumar = document.createElement("button");
      btnSumar.textContent = "+";
      btnSumar.dataset.id = producto.id;
      btnSumar.dataset.accion = "sumar";
      li.appendChild(btnSumar);

      // Subtotal individual
      const subtotal = document.createElement("strong");
      subtotal.textContent = ` | Sub: ${(
        producto.price * producto.cantidad
      ).toFixed(2)}€ `;
      li.appendChild(subtotal);

      // Botón Eliminar
      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Borrar";
      btnEliminar.dataset.id = producto.id;
      btnEliminar.dataset.accion = "eliminar";
      li.appendChild(btnEliminar);

      lista.appendChild(li);
    });

    fragment.appendChild(lista);

    // 4. Botón Vaciar Carrito (al final de todo)
    const btnVaciar = document.createElement("button");
    btnVaciar.textContent = "Vaciar Carrito Completo";
    btnVaciar.dataset.accion = "vaciar"; // No necesita ID, borra todo
    btnVaciar.style.marginTop = "10px"; // Un poco de estilo inline básico si quieres
    fragment.appendChild(btnVaciar);

    return fragment;
  }
}
