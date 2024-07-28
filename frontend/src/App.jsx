import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { RedVoznje } from "./pages/Timetable/RedVoznje";
import { PrevoznikPanel } from "./pages/CarrierPanel/PrevoznikPanel";
import { DodajLiniju } from "./pages/AddLine/DodajLiniju";
import { News } from "./pages/News/News";
import { Cjenovnik } from "./pages/PriceList/Cjenovnik";
import { ONama } from "./pages/AboutUs/ONama";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Profil } from "./pages/Profile/Profil";
import { AdminPanel } from "./pages/AdminPanel/AdminPanel";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/red-voznje",
                element: <RedVoznje />,
            },
            {
                path: "/prevoznik-panel",
                element: <PrevoznikPanel />,
            },
            {
                path: "/admin-panel",
                element: <AdminPanel />,
            },
            {
                path: "/dodaj-liniju",
                element: <DodajLiniju />,
            },
            {
                path: "/news",
                element: <News />,
            },
            {
                path: "/cjenovnik",
                element: <Cjenovnik />,
            },
            {
                path: "/onama",
                element: <ONama />,
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
                element: <Profil />,
            },
        ],
    },
]);

function App() {
    return (
        <div className="app">
            <div className="container">
                <RouterProvider router={router} />
            </div>
        </div>
    );
}

export default App;
