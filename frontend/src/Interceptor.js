import axios from "axios";

export const setupInterceptors = () => {
    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            console.log("intercepting response");
            if (
                error.response.status === 401 &&
                window.location.pathname !== "/login"
            ) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                window.location.href = "/login";
            }
            if (error.response.status === 403) {
                window.location.href = "/";
            }
            return Promise.reject(error);
        }
    );

    axios.interceptors.request.use(
        (config) => {
            console.log("intercepting request");
            const token = localStorage.getItem("token");
            if (token != null) {
                config.headers.Authorization = "Bearer " + token;
            }

            return config;
        },
        (err) => {
            return Promise.reject(err);
        }
    );
};
