import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const getLines = async () => {
    const response = await axios.get(`${URL}/routes`, {
        headers: { Authorization: "Basic " + btoa("username1:idemoautobusi") },
    });
    return response.data;
};
