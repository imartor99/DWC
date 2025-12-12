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
      const textoCarro = document.createElement("p");
      textoCarro.textContent = `Carrito vacio`;
      fragment.appendChild(textoCarro);
    } else {
      const listaCarro = document.createElement("ul");
      this.articulos.forEach((producto) => {
        const articulo = document.createElement("li");
        articulo.innerHTML = `Personaje: ${producto.name}`;
        listaCarro.appendChild(articulo);
      });

      fragment.appendChild(listaCarro);
    }
    return fragment;
  }

  guardarCarrito(){
    localStorage.setItem("carrito", JSON.stringify(this.articulos));
  }

  cargarCarrito(){
    const carritoGuardado = localStorage.getItem('carrito');
    if(carritoGuardado){
        return JSON.parse(carritoGuardado);
    }else{
        return [];
    }
  }
}
