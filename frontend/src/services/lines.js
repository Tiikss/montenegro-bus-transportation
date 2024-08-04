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
    return response.data;
};
