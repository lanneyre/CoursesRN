import constante from '../constante/const'
export default function getData(text, last, nbResult, page) {
    if (!nbResult) {
        nbResult = constante.nbResult;
    }
    if (!page) {
        page = 1;
    }
    let url = 'http://' + constante.serveur + ':' + constante.port + '/api/?nbResult=' + nbResult + '&last=' + last + '&search=' + text
    if (page > 1) {
        url += '&page=' + page;
    }

    return fetch(url).then((response) => response.json())
        .catch((error) => console.error(error))
}