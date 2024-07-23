import React from "react";
import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const defaultProps = {
    center: {
        lat: 42.5,
        lng: 19.3
    },
    zoom: 8
};

const Home = () => {
    return (
        <main className="home-body">
            <div className="welcome-div">
                <h1 className="welcome-ttl">Dobrodošli!</h1>
            </div>

            <div className="red-div">
                <h1>Red vožnje</h1>

                <div className="choose">
                    <label htmlFor="beginning">Od:</label>
                    <input type="text" placeholder="Unesite polaznu stanicu" id="beginning"/>
                    <label htmlFor="end">Do:</label>
                    <input type="text" placeholder="Unesite krajnju stanicu" id="end" />
                    <label htmlFor="date">Datum:</label>
                    <input type="date" id="date" />
                    <button><FontAwesomeIcon icon={faSearch} style={{ marginRight: "5px" }} /> Pretraži</button>
                </div>
            </div>

            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyByhANtjCtr6kXzO0gSJKVW1oR2qzR46Nw" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={42.5}
                        lng={19.3}
                        text="Crna Gora"
                    />
                </GoogleMapReact>
            </div>
        </main>
    );
}

export default Home;
