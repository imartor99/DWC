// TODO: Implementar función llamadaAPI
export function llamadaAPI(url){
    return fetch(url).then((result)=>result.json());
}