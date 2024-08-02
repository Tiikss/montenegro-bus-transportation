import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const login = async (username, password) => {
    const response = await axios.post(
        `${URL}/token`,
        { username, password },
        {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        }
    );
    return response.data;
};

export const register = async (user) => {
    console.log(user);
    const response = await axios.post(`${URL}/signup`, user, {
        headers: {
            "ngrok-skip-browser-warning": "true",
        },
    });
    return response.data;
};
