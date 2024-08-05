import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const login = async (user) => {
    try{
        const response = await axios.post(`${URL}/token`, user, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "ngrok-skip-browser-warning": "true",
            },
        });
        return response.data;
    }
    catch(error){
       throw error.response.status;
    }
};

export const register = async (user) => {
    try{
        const response = await axios.post(`${URL}/signup`, user, {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        });
        return response.data;
    }
    catch(error){
        throw error.response.status;
    }
};

export const getUser = async () => {
    const response = await axios.get(`${URL}/user/me`, {
        headers: {
            "ngrok-skip-browser-warning": "true",
        },
    });
    return response.data;
};
