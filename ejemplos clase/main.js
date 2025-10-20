import { Albaran } from './js/Albaran.js';
import { Articulo } from './js/Articulo.js';
import { Cliente } from './js/cliente.js';


(function() {
    console.log("Ejemplo de uso de clases importadas");
    // Crear un cliente
    let cliente1 = new Cliente("12345678A", "Juan Pérez", "Calle Falsa 123", "600123456", "juan@dominio.com");
    console.log("Cliente creado:", cliente1);
    // Mostrar solo email del cliente
    console.log("Email del cliente:", cliente1.email);

    // Crear un artículo
    let articulo1 = new Articulo("A001", "Camiseta", 19.99);
    console.log("Artículo creado:", articulo1);
    // Mostrar solo precio del artículo
    console.log("Precio del artículo:", articulo1.precio);

    // Crear un albarán
    let albaran1 = new Albaran(cliente1, "ALB1001", "2024-06-15");
    console.log("Albarán creado:", albaran1);

})();