import constante from '../constante/const'
export default function getData(text, last, nbResult, page) {
    if (!nbResult) {
        nbResult = constante.nbResult;
    }
    if (!page) {
        page = 1;
    }
    let url = 'http://localhost:80/listeJson.php?nbResult=' + nbResult + '&last=' + last + '&query=' + text
    if (page > 1) {
        url += '&page=' + page;
    }
    return fetch(url, { mode: 'cors' })
        .then((response) => response.json())
        .catch((error) => console.error(error))
}