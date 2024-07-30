import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const getNews = async () => {
    const response = await axios.get(`${URL}/news`, {
        headers: {
            "ngrok-skip-browser-warning": "true"
        }
    });
    return response.data;
}

export const deleteNews = async (id) => {
    const response = await axios.delete(`${URL}/news/${id}`, {
        headers: {
            "ngrok-skip-browser-warning": "true"
        }
    });
    return response.data;
}