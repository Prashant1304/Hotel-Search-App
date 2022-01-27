const api = "https://5f3edf2513a9640016a69257.mockapi.io/hotels"

export default class Api {
    static getUsers() {
        const uri = api;
        
        return fetch(uri, {
            method: 'GET'
        });
    }
}