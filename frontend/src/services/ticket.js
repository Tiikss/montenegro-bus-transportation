import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const getAllTickets = async (page) => {
    try {
        const response = await axios.get(`${URL}/tickets/${page}`, {
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
        const response = await axios.get(`${URL}/tickets/count`, {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const postTicket = async (ticket) => {
    try {
        const response = await axios.post(`${URL}/tickets`, ticket, {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}