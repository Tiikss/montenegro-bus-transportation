import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Timetable } from "./pages/Timetable/Timetable";
import { CarrierPanel } from "./pages/CarrierPanel/CarrierPanel";
import { AddLine } from "./pages/AddLine/AddLine";
import { News } from "./pages/News/News";
// import { PriceList } from "./pages/PriceList/PriceList";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Profile } from "./pages/Profile/Profile";
import { AdminPanel } from "./pages/AdminPanel/AdminPanel";
import { TimetableFiltered } from "./pages/TimeTableFiltered/TimetableFiltered";

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
