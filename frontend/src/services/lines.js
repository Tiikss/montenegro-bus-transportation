import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const getLines = async (isActive, page, company) => {
    const response = await axios.get(
        `${URL}/routes_paginated/${page}?is_active=${isActive ? "1" : "0"}${
            company ? `&company_id=${company}` : ""
        }`,
        {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        }
    );

    return response.data;
};

export const getNumberOfPages = async (isActive, company) => {
    const response = await axios.get(
        `${URL}/routes_paginated/count?is_active=${isActive ? "1" : "0"}${
            company ? `&company_id=${company}` : ""
        }`,
        {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        }
    );
    return response.data;
};

export const getLinesFiltered = async (
    isActive,
    page,
    startCity,
    endCity,
    date
) => {
    const response = await axios.get(
        `${URL}/routes_filtered/${page}?is_active=${
            isActive ? "1" : "0"
        }&startCity=${startCity}&endCity=${endCity}&date=${date}`,
        {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        }
    );
    return response.data;
};

export const getLinesFilteredByCity = async (isActive, page, city) => {
    const response = await axios.get(
        `${URL}/routes_filtered/${page}?is_active=${
            isActive ? "1" : "0"
        }&startCity=${city}`,
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

    return response.data;
};
