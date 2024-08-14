import React from "react";
import { useNavigate } from "react-router-dom";
import "./page-not-found.css";

export const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <main className="page-not-found-container">
            <h1>Stranica ne postoji</h1>
            <button onClick={() => navigate("/")}>
                Nazad na pocetnu stranicu
            </button>
        </main>
    );
};
