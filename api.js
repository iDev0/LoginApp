import axios from 'axios'

const callApi = async (method, path, data, jwt) => {
    const headers = {
        Authorization : jwt,
        'Content-Type' : 'application/json'
    }

    const baseUrl = 'http://127.0.0.1:5000/api'
    const fullUrl = `${baseUrl}${path}`

    if (method === 'get' || method === 'delete') {
        return axios[method](fullUrl, {headers})
    } else {
        return axios[method](fullUrl, data, {headers})
    }
}

const testApi = async (method, path, data, jwt) => {
    const headers = {
        Authorization : jwt,
        'Content-Type' : 'application/json'
    }

    // https://jsonplaceholder.typicode.com/posts?userId=1
    const baseUrl = 'https://jsonplaceholder.typicode.com'
    const fullUrl = `${baseUrl}${path}`

    // console.log(fullUrl)

    if (method === 'get' || method === 'delete') {
        return axios[method](fullUrl, {headers})
    } else {
        return axios[method](fullUrl, data, {headers})
    }
}




export default {
    createAccount : form => callApi('post', '/users/register'),
    login : form => callApi('post', '/users/login', form),
    rooms : (page = 1) => testApi('get', `/posts?userId=${page}`)
}