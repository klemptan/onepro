import axios from "axios";
export const baseAPIURL = 'http://localhost:7000'


const $host = axios.create({
    baseURL:baseAPIURL,
})

const $authHost = axios.create({
    baseURL:baseAPIURL,
})

const authInterceptor = config=>{
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}