import { useState, createContext, useEffect } from "react";
import { login as loginApi } from "../services/auth";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const [userToken, setUserToken] = useState(
        localStorage.getItem("token") || ""
    );

    const login = async (inputs) => {
        try {
            const response = await loginApi(inputs);
            const { access_token, ...other } = response;
            setUser(other);
            setUserToken(access_token);
        } catch (error) {
            console.log(error);
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
    }, [userToken]);

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
