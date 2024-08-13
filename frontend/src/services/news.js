import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const getNews = async (pageNumber) => {
    const response = await axios.get(`${URL}/news/${pageNumber}`, {
        headers: {
            "ngrok-skip-browser-warning": "true",
        },
    });
    return response.data;
};

export const getFilteredNews = async (pageNumber, filter) => {
    const response = await axios.get(
        `${URL}/news-filtered/${pageNumber}?search=${filter}`,
        {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        }
    );
    return response.data;
};

export const deleteNews = async (id) => {
    const response = await axios.delete(`${URL}/news/${id}`, {
        headers: {
            "ngrok-skip-browser-warning": "true",
        },
    });
    return response.data;
};

export const updateNews = async (id, news) => {
    const response = await axios.put(`${URL}/news/${id}`, news, {
        headers: {
            "ngrok-skip-browser-warning": "true",
        },
    });
    return response.data;
};

export const addNews = async (news) => {
    const response = await axios.post(`${URL}/news`, news, {
        headers: {
            "ngrok-skip-browser-warning": "true",
        },
    });
    return response.data;
};

export const addNewsImage = async (id, image) => {
    const response = await axios.put(`${URL}/news/uploadimg/${id}`, image, {
        headers: {
            "ngrok-skip-browser-warning": "true",
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
};
