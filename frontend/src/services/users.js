import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const getUsersByRole = async (page, role) => {
    const response = await axios.get(`${URL}/users/${page}?role=${role}`, {
        headers: {
            "ngrok-skip-browser-warning": "true",
        },
    });
    return response.data;
};

export const deleteUser = async (id) => {
    const response = await axios.delete(`${URL}/users/${id}`, {
        headers: {
            "ngrok-skip-browser-warning": "true",
        },
    });
    return response.data;
};

export const updateUser = async (id, user) => {
    const response = await axios.put(`${URL}/users/${id}`, user, {
        headers: {
            "ngrok-skip-browser-warning": "true",
        },
    });
    return response.data;
};
