import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const getLines = async (isActive, page) => {
    const response = await axios.get(
        `${URL}/routes_paginated/${page}?is_active=${isActive ? "1" : "-1"}`,
        {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        }
    );
    return response.data;
};

export const getNumberOfPages = async (isActive) => {
    const response = await axios.get(
        `${URL}/routes_paginated/count?is_active=${isActive ? "1" : "-1"}`,
        {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        }
    );
    return response.data;
};

export const addLine = async (line) => {
    const response = await axios.post(`${URL}/routes`, line, {
        headers: {
            "ngrok-skip-browser-warning": "true",
        },
    });
};

export const activateLine = async (id, activate) => {
    const response = await axios.put(
        `${URL}/routes/activate/${id}?should_be_activated=${activate}`,
        {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        }
    );

    return response.data;
};

export const getLineById = async (id) => {
    const response = await axios.get(`${URL}/routes/${id}`, {
        headers: {
            "ngrok-skip-browser-warning": "true",
        },
    });

    return response.data;
};

export const editLine = async (id, line) => {
    const response = await axios.put(`${URL}/routes/${id}`, line, {
        headers: {
            "ngrok-skip-browser-warning": "true",
        },
    });
};
