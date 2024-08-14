import React, { useState, useEffect } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Timetable } from "./pages/Timetable/Timetable";
import { CarrierPanel } from "./pages/CarrierPanel/CarrierPanel";
import { AddLine } from "./pages/AddLine/AddLine";
import { News } from "./pages/News/News";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Profile } from "./pages/Profile/Profile";
import { AdminPanel } from "./pages/AdminPanel/AdminPanel";
import { TimetableFiltered } from "./pages/TimeTableFiltered/TimetableFiltered";
import { ChangePassword } from "./pages/ChangePassword/ChangePassword";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";

const Layout = ({ theme, toggleTheme }) => {
    return (
        <>
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <Outlet />
            <Footer />
        </>
    );
};

function App() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        window.location.reload();
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout theme={theme} toggleTheme={toggleTheme} />, 
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/red-voznje",
                    element: <Timetable />,
                },
                {
                    path: "/red-voznje/:startCity/:endCity/:date",
                    element: <TimetableFiltered />,
                },
                {
                    path: "/prevoznik-panel",
                    element: <CarrierPanel />,
                },
                {
                    path: "/admin-panel",
                    element: <AdminPanel />,
                },
                {
                    path: "/dodaj-liniju/:id",
                    element: <AddLine />,
                },
                {
                    path: "/news",
                    element: <News />,
                },
                // {
                //     path: "/cjenovnik",
                //     element: <PriceList />,
                // },
                {
                    path: "/onama",
                    element: <AboutUs />,
                },
                {
                    path: "/login",
                    element: <Login />,
                },
                {
                    path: "/register",
                    element: <Register />,
                },
                {
                    path: "/profil",
                    element: <Profile />,
                },
            ],
        },
        {
            path: "/promjena-lozinke",
            element: <ChangePassword />,
        },
        {
        path: "*",
        element: <PageNotFound />,
        },
    ]);

    return (
        <div className={`app ${theme}`}>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
