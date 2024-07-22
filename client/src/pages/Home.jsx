import React from "react";
import "../styles/home.css"
import slika1 from "../images/group-buses-driving-along-road-sunset.jpg"

const Home = () => {
    return (
        <main className="home-body">
            <img src={slika1} alt="slika1" className="home-img" />
        </main>
    );
}

export default Home;