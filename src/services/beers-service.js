import axios from "axios";


const apiBeer = axios.create({
    baseURL: 'https://beers-api.edu.ironhack.com/'
});

apiBeer.interceptors.response.use(
    (response) => response.data, 
    (error) => {
        console.info('API error:', 
        {
            message: error.message,
            status: error.response?.status,
        });

        return Promise.reject(error);
    }
);

export async function getListBeers() {
    try {
        return await apiBeer.get('/beers');
    } catch (error) {
        console.error('Error en getListBeers: ', error);
    }
}

export async function getBeerId(id) {
    try {
        return await apiBeer.get(`/beers/${ id }`);
    } catch (error) {
        console.error('Error en getBeerId: ', error);
    }
}

export async function setBeerNew(data) {
    try {
        return await apiBeer.post(
            '/beers/new', 
            data,
        );
    } catch (error) {
        console.error('Error en setBeerNew: ', error);
    }
}