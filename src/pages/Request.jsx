import axios from 'axios';

const IP_ADDRESS = 'http://192.168.1.115:8080/api';
const VERSION = '/v1/';

export default class Request {

    static get(path) {
        return axios.get(IP_ADDRESS + VERSION + path, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    static post(path, body) {
        return axios.post(IP_ADDRESS + VERSION + path, body);
    }

    static separateCamelCase(str) {

        let temp = str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1 ')
        temp = temp.substring(0, 1).toUpperCase() + temp.substring(1);
        return temp;

    }

}