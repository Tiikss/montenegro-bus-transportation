import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const getAllStations = async (page) => {
    try {
        const response = await axios.get(`${URL}/stations/${page}`, {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getNumberOfPages = async () => {
    try {
        const response = await axios.get(`${URL}/stations/count`, {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteStation = async (id) => {
    try {
        const response = await axios.delete(`${URL}/stations/${id}`, {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const addStation = async (station) => {
    try {
        const response = await axios.post(`${URL}/stations`, station, {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        });
        console.log(station);
        console.log(response.data);

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
