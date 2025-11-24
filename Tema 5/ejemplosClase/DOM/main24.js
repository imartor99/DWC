const informacionNodo = (nodo) => {
    console.log('Informacion del nodo: ' , nodo)
    console.log('Tipo de nodo: ' , nodo.nodeType)
    console.log('Nombre del nodo: ' , nodo.nodeName)
    console.log('Valor del nodo: ' , nodo.nodeValue)
    console.log('Numero de hijos: ' , nodo.childNodes.length)
    console.log('Contenido del nodo: ' , nodo.textContent)

    //obtenemos todos los tipos de nodos
    console.log('Primer hijo: ' , nodo.firstChild)
    console.log('Ultimo hijo: ' , nodo.lastChild)
    console.log('Nodo padre: ' , nodo.parentNode)
    console.log('Siguiente hermano: ' , nodo.nextSibling)
    console.log('Anterior hermano: ' , nodo.previousSibling)

    //Metodos para obtner solo elemntos tipo element
    console.log('Primer hijo: ' , nodo.firstElementChild)
    console.log('Ultimo hijo: ' , nodo.lastElementChild)
    console.log('Nodo padre: ' , nodo.parentElement)
    console.log('Siguiente hermano: ' , nodo.nextElementSibling)
    console.log('Anterior hermano: ' , nodo.previousElementSibling)
}
/**
 * Muestra el nodo actual y sus hijos
 * @param {*} nodo 
 */
const recorreNodo = (nodo) => {
    console.log('Recorriendo el nodo: ' , nodo)
    //ahora usamos recursividad
    for (let hijo of nodo.children) //nodo.children devuelve un array con todos los hijos
        recorreNodo(hijo);

    console.log('Fin del recorrido del nodo: ' , nodo)
}


// const recorreNodo = (nodo) => {
//     console.log('Recorriendo el nodo: ' , nodo)
//     for (let hijo of nodo.children) //nodo.children devuelve un array con todos los hijos
//         console.log('Hijo: ' , hijo)
// }


const main = () => {
    const lista = document.getElementById('lista');
    informacionNodo(lista);
    console.log('----------------------------------')
    console.log('Probando funcion recorrer: ')
    recorreNodo(lista);
}

document.addEventListener('DOMContentLoaded', main);