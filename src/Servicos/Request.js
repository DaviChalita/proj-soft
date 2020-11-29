import axios from 'axios';

export const API = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        'Content-Type': 'application/json',
    }
});

class Request {

    async get(url) {
        try {
            return await API.get(url);
        } catch (erro) {
            return Promise.reject(erro.response)
        }

    };

    async post(url, obj, headers) {
        try {
            if (headers === null) {
                return await API.post(url, obj);
            } else {
                return await API.post(url, obj, headers);
            }
        } catch (erro) {
            return Promise.reject(erro.response)
        }
    };

    delete(url, id) {
        var resposta = API.delete(url, { params: { id: id } });
        return resposta
    };

    put(url, obj) {
        var resposta = API.put(url, obj);
        return resposta;
    };
}

export default new Request();