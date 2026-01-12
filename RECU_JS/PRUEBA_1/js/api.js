export function llamadaApi(url) {
  return fetch(url).then((result) => result.json());
}
