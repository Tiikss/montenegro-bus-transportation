import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const getLines = async (isActive) => {
    console.log(`${URL}/routes/?is_active=${isActive ? "1" : "-1"}`);
    const response = await axios.get(
        `${URL}/routes/?is_active=${isActive ? "1" : "-1"}`,
        {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        }
    );
    return response.data;
};
