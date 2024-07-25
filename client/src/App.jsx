import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RedVoznje from "./pages/RedVoznje";
import PrevoznikPanel from "./pages/PrevoznikPanel";
import DodajLiniju from "./pages/DodajLiniju";
import News from "./pages/News";
import Cjenovnik from "./pages/Cjenovnik";
import ONama from "./pages/ONama";

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
            }
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
