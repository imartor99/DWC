export function llamadaAPICallback(url, callback, callbackError) {
  fetch(url)
    .then((result) => result.json())
    .then((datos) => callback(datos))
    .catch((error) => callbackError(error));
}