import { useState, createContext, useEffect } from "react";
import { login as loginApi, getUser as getUserApi } from "../services/auth";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const [userToken, setUserToken] = useState(
        localStorage.getItem("token") || ""
    );

    const getUser = async () => {
        try {
            const response = await getUserApi();
            setUser(response);
        } catch (error) {
            console.log(error);
        }
    };

    const login = async (inputs) => {
        try {
            const response = await loginApi(inputs);
            const { access_token, ...other } = response;
            setUserToken(access_token);
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
        setUserToken("");
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        localStorage.setItem("token", userToken);
        if (userToken) {
            getUser();
        }
    }, [userToken]);

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
