import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const getAllStations = async () => {
    try {
        const response = await axios.get(`${URL}/stations`, {
            headers: {
                Authorization: "Basic " + btoa("username1:idemoautobusi"),
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
                Authorization: "Basic " + btoa("username1:idemoautobusi"),
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
