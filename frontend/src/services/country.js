import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const getCountries = async () => {
    const response = await axios.get(`${URL}/countries`, {
        headers: {
            "ngrok-skip-browser-warning": "true",
        },
    });
    return response.data;
};
