import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const getCompanies = async (filter) => {
    if (!filter) {
        const response = await axios.get(`${URL}/companies`, {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        });
        return response.data;
    }
    const response = await axios.get(`${URL}/companies?search=${filter}`, {
        headers: {
            "ngrok-skip-browser-warning": "true",
        },
    });
    return response.data;
};

export const addCompany = async (company) => {
    try {
        const response = await axios.post(`${URL}/companies`, company, {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
