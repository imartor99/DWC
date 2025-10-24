/*let expandeArray=()=>{
    const numeros=[1,2,3,4,5];
    console.log("Array orgininal:", numeros)
    console.log("Array orgininal:", ...numeros)
}*/

//Copiar objetos
let ejemploSpreadOperatorsObjetos= () =>{
    const persona1={nombre:"ana", edad:25};
    const persona2 = {...persona1};
    console.log("Persona 1: ", persona1)
    console.log("Persona 2: ", persona2)
}

//Combinar objetos
let ejemploSpreadOperatorsCombinarObjetos = ()=>{
    const objeto1={nombre:"ana", edad:25};
    const objeto2 = {calle:"ronda", numero:23};
    const objetoCombinado = {...objeto1, ...objeto2, provincia:"Granada"}
    console.log("Objeto 1: ", objeto1)
    console.log("Objeto 2: ", objeto2)
    console.log("Objeto combinado: ", objetoCombinado)
}


(function() {
    console.log("Main ejemplo cargado");
    //expandeArray();
    let valores = ["a", "b", "c"];
    let arDestino2=[];

    valores = arDestino2;

    let arDestino=[...valores, "g"]
    console.log("Array copiado por valor: ", arDestino);
    arDestino.push("f")
    console.log("Array copiado por referencia: ", arDestino2)
    console.log("Array original: ", valores)

    ejemploSpreadOperatorsObjetos();
    ejemploSpreadOperatorsCombinarObjetos();
    
})()

