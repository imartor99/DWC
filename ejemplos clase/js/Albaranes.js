import { Albaran } from './Albaran.js';

export class Albaranes {
    constructor(arAlbaranes){
        this.arAlbaranes = arAlbaranes;
    }

    inicializar(){
        const arAlbaranes = [];
        console.log("Inicializando albaranes");
        for (let i = 0; i < 3; i++) {
            arAlbaranes.push(new Albaran(`Cliente ${i+1}`, `ALB00${i+1}`, `2024-06-1${i+1}`));
        }

        return arAlbaranes;
    }

    //metodo para buscar albaran de un cliente por num de cliente
    buscarAlbaranPorCliente(nAlbaran){
        return this.arAlbaranes.find(albaran => albaran.nAlbaran === nAlbaran);
    }
}