import axios from "axios"

export const api = axios.create({
    headers: {
        'Content-type': 'application/json'
    },
    //baseURL: 'https://back-poster.admlr.lipetsk.ru/',
    //baseURL: 'https://jsonplaceholder.typicode.com/',
    baseURL: 'https://raw.githubusercontent.com/',
    responseType: 'json'
})
