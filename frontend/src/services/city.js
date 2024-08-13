import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const getCities = async (filter) => {
    const response = await axios.get(
        `${URL}/cities${filter ? `?city_name=${filter}` : ""}`,
        {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        }
    );
    return response.data;
};
