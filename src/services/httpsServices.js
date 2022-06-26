import axios from "axios";

const key = 'AIzaSyAdCvicwKueKYdA-gwUTrHIqvY5JzI0Iqw';

const requests = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
})

export const get = async (payload) => {
    try {
        console.log(payload.payload.term)
        const response = await requests.get('', {
            params: {
                q: payload.payload.term,
                orderBy: payload.payload.sort,
                maxResults: 30,
                startIndex: payload.payload.start,
                key,
            }
        })
        // console.log('get', response);
        return response.data;
    } catch (e) {
        throw e.response.data.error.message;
    }
}

export const getOneBook = async (payload) => {
    try {
        const response = await axios.get(payload)
        console.log('getOneBook', response);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}
