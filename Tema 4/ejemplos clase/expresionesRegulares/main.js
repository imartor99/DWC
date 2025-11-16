const usoExec = () => {
  const regex = /\d{5}/g;
  const str = "cp 18230 cp 18200 cp 18700";
  let array;

  while ((array = regex.exec(str)) !== null) {
    console.log(`Found ${array[0]}. Next starts at ${regex.lastIndex}.`);
  }
};

const compruebaNumero = () => {
  const texto = "12345a";
  const numero1 = new RegExp("^d+$");

  if (numero1.test(texto)) {
    console.log(`${texto} es un numero valido`);
  } else {
    console.log(`${texto} no es un numero valido`);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  compruebaNumero();
  usoExec();
});
