import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const login = async (username, password) => {
    const response = await axios.post(`${URL}/token`, { username, password }, {
        headers: {
            "ngrok-skip-browser-warning": "true"
        }
    });
    return response.data;
}

export const register = async (username, email, password) => {
    const response = await axios.post(`${URL}/register`, { username, email, password }, {
        headers: {
            "ngrok-skip-browser-warning": "true"
        }
    });
    return response.data;
}
