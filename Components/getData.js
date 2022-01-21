
export default function getData (text) {
    const url = 'http://localhost:80/listeJson.php?query=' + text
    return fetch(url, {mode:'cors'})
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }