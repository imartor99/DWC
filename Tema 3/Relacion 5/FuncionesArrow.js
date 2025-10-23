// FUNCIÓN ORIGINAL 1: function sum(num1, num2){ return num1 + num2 }
// Arrow Function: Uso de retorno implícito ya que es una sola línea
const sum = (num1, num2) => num1 + num2;



// FUNCIÓN ORIGINAL 2: function stringLength(str){ console.log(`the length of "${str}" is:`, str.length) }
// Arrow Function: Necesita llaves {} porque contiene una sentencia console.log
const stringLengthConsole = (str) => {
    console.log(`the length of "${str}" is:`, str.length);
};



// FUNCIÓN ORIGINAL 3: function stringLength(str){ let length = str.length; console.log(`the length of "${str}" is:`, length); return str.length; }
// Arrow Function: Necesita llaves {} y la palabra 'return' porque tiene varias sentencias (declaración de variable y console.log)
const stringLengthReturn = (str) => {
    let length = str.length;
    console.log(`the length of "${str}" is:`, length);
    return str.length;
};


// FUNCIÓN ORIGINAL 4: function showAlert(name){ alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`) }
// Definimos la lista de alertas (fuera de la función)
const alerts = [
    "Hey, you are awesome",
    "You are so wonderful",
    "What a marvel you are",
    "You're so lovely",
    "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"
];

// Arrow Function: Necesita llaves {} porque es una sentencia que no devuelve nada (alert)
const showAlert = (name) => {
    alert(alerts[(Math.floor(Math.random() * alerts.length))] + `, ${name}!`);
};

//---------------------------------------------------------------------------------------------------------------------------------------//

//EJERCICIO 2

// Arrow function that returns the string, Hello, I am ${name}, and I am ${age} years old.

const introduceYourself = (name, age) => `Hello, I am ${name}, and I am ${age} years old.`;

//---------------------------------------------------------------------------------------------------------------------------------------//

//EJERCICIO 3

// 3. Write an arrow function that takes an array of integers, and returns the sum of the elements in the array. Google and use the built-in reduce array method for this.
const sumArray = (arr) => arr.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
