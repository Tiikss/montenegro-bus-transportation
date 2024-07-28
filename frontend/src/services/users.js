import axios from "axios";

export const getUsers = async (page, role) => {
    const response = await axios.get(
        `http://localhost:8000/users/${page}?role=${role}`
    );
    return response.data;
};
