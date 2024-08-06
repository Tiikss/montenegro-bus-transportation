import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const getCities = async () => {
    const response = await axios.get(`${URL}/cities`, {
        headers: {
            "ngrok-skip-browser-warning": "true",
        },
    });
    return response.data;
}