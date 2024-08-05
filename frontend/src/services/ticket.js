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
