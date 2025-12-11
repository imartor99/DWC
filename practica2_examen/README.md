# Plantilla Examen - Práctica 2

Esta es una plantilla base con la misma estructura del examen original, lista para adaptarse a otra API.

## 📁 Estructura del proyecto

```
practica2_examen/
├── css/
│   ├── styleLogin.css
│   └── styleDatos.css
├── js/
│   ├── api.js
│   ├── auth.js
│   ├── carrito.js
│   ├── dom.js
│   ├── login.js
│   ├── mainLogin.js
│   └── mainDatos.js
├── login.html
├── datos.html
└── README.md
```

## 🔧 Configuración

### Cambiar la API

Busca todos los comentarios `// TODO:` en el código y cambia las URLs:

1. **`js/login.js`** (línea ~10):

   ```javascript
   const usuarios = await llamadaAPI("TU_URL_AQUI/usuarios");
   ```

2. **`js/dom.js`** (línea ~40):

   ```javascript
   const arrProductos = await llamadaAPI("TU_URL_AQUI/productos");
   ```

3. **`js/mainDatos.js`** (líneas ~28 y ~75):
   ```javascript
   const arrProductos = await llamadaAPI("TU_URL_AQUI/productos");
   ```

### Adaptar la estructura de datos

Si tu API tiene una estructura diferente, modifica:

- **`js/dom.js`** → Función `crearCard()` para adaptar los campos
- **`js/login.js`** → Función `validaUsuario()` para adaptar los campos de usuario

## 🚀 Uso

1. Configura tu servidor API (json-server, API externa, etc.)
2. Cambia las URLs en los archivos indicados
3. Adapta la estructura de las cards según tu API
4. Abre `login.html` en el navegador

## ✅ Funcionalidades incluidas

- ✅ Sistema de login con localStorage
- ✅ Verificación de sesión
- ✅ Filtrado de productos (precio, valoración, votos)
- ✅ Filtrado por categorías
- ✅ Carrito de compras con localStorage
- ✅ Click en cards para añadir al carrito
- ✅ Arquitectura modular con ES6 modules
- ✅ Uso consistente de async/await

## 📝 Notas

- Todos los módulos usan ES6 modules (import/export)
- El carrito persiste en localStorage
- Las credenciales de usuario también se guardan en localStorage
- Código comentado y estructurado según buenas prácticas
