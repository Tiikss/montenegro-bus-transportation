import React, { useEffect } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import slika1 from "../../images/young-girl-bus.jpg";
import { Modal } from "../../components/Modal/Modal";
import { DropDownCard } from "../../components/DropdownCard/DropdownCard";
import { useState } from "react";
import { SingleNewsMain } from "./components/SingleNewsMain/SingleNewsMain";
import { getNews } from "../../services/news";
import { getStationsFiltered } from "../../services/stations";

export const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentNews, setCurrentNews] = useState({ title: "", content: "" });
    const [news, setNews] = useState([]);
    const [stationsFrom, setStationsFrom] = useState([]);
    const [stationsTo, setStationsTo] = useState([]);
    const [inputs, setInputs] = useState({
        searchFrom: "",
        searchTo: "",
        date: new Date().toISOString().split("T")[0],
    });
    const [inputsSearch, setInputsSearch] = useState({
        searchFrom: "",
        searchTo: "",
        date: new Date().toISOString().split("T")[0],
    });
    const navigate = useNavigate();
    const value = localStorage.getItem('theme');

    const handleOpenModal = (title, content) => {
        setCurrentNews({ title, content });
        setShowModal(true);
    };

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        if (e.target.id === "date") {
            setInputsSearch((prev) => ({
                ...prev,
                [e.target.id]: e.target.value,
            }));
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSetSearch = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.parentElement.parentElement.parentElement.childNodes[0]
                .id]: e.target.innerText,
        }));
        if (
            e.target.parentElement.parentElement.parentElement.childNodes[0]
                .id === "searchFrom"
        ) {
            const station = stationsFrom.find((station) =>
                station.address.includes(e.target.innerText)
            );
            setInputsSearch((prev) => ({
                ...prev,
                [e.target.parentElement.parentElement.parentElement
                    .childNodes[0].id]: station.city_name,
            }));
        } else {
            const station = stationsTo.find((station) =>
                station.address.includes(e.target.innerText)
            );
            setInputsSearch((prev) => ({
                ...prev,
                [e.target.parentElement.parentElement.parentElement
                    .childNodes[0].id]: station.city_name,
            }));
        }
    };

    const handleNavigate = (e) => {
        e.preventDefault();
        navigate(
            `/red-voznje/${inputsSearch.searchFrom}/${inputsSearch.searchTo}/${inputsSearch.date}`
        );
    };

    const fetchNews = async () => {
        try {
            const response = await getNews(1);
            setNews(response.slice(0, 4));
        } catch (error) {
            console.log(error);
        }
    };

    const fetchStationsFrom = async () => {
        try {
            let response = await getStationsFiltered(inputs.searchFrom);
            setStationsFrom(response);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchStationsTo = async () => {
        try {
            let response = await getStationsFiltered(inputs.searchTo);
            setStationsTo(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    useEffect(() => {
        fetchStationsFrom();
    }, [inputs.searchFrom]);

    useEffect(() => {
        fetchStationsTo();
    }, [inputs.searchTo]);

    console.log(stationsFrom)

    return (
        <main className="home-body">
            <div className="welcome-div">
                <h1 className="welcome-ttl">Dobrodošli!</h1>
            </div>

            <div className="red-div">
                <h1>Red vožnje</h1>

                <div className="choose">
                    {value==='light' ? <label htmlFor="beginning" style={{color: "black"}}>Od:</label> : <label htmlFor="beginning" style={{color: "white"}}>Od:</label>}
                    <div className="add-line-input-container">
                        <input
                            type="text"
                            placeholder="Unesite polaznu stanicu"
                            id="searchFrom"
                            value={inputs.searchFrom}
                            onChange={handleChange}
                        />
                        <div className="dropdown-container">
                            {inputs.searchFrom !== "" &&
                            stationsFrom.length !== 0 &&
                            inputs.searchFrom !== stationsFrom[0].address
                                ? stationsFrom.map((item) => (
                                      <DropDownCard
                                          item={item.address}
                                          key={item.id}
                                          onClick={handleSetSearch}
                                      />
                                  ))
                                : null}
                        </div>
                    </div>
                    {value==='light' ? <label htmlFor="end" style={{color: "black"}}>Do:</label> : <label htmlFor="end" style={{color: "white"}}>Do:</label>}
                    <div className="add-line-input-container">
                        <input
                            type="text"
                            placeholder="Unesite krajnju stanicu"
                            id="searchTo"
                            value={inputs.searchTo}
                            onChange={handleChange}
                        />
                        <div className="dropdown-container">
                            {inputs.searchTo !== "" &&
                            stationsTo.length !== 0 &&
                            inputs.searchTo !== stationsTo[0].address
                                ? stationsTo.map((item) => (
                                      <DropDownCard
                                          item={item.address}
                                          key={item.id}
                                          onClick={handleSetSearch}
                                      />
                                  ))
                                : null}
                        </div>
                    </div>
                    {value==='light' ? <label htmlFor="date" style={{color: "black"}}>Datum:</label> : <label htmlFor="date" style={{color: "white"}}>Datum:</label>}
                    <input
                        type="date"
                        id="date"
                        defaultValue={new Date().toISOString().split("T")[0]}
                        onChange={handleChange}
                    />
                    <button onClick={(e) => handleNavigate(e)}>
                        <FontAwesomeIcon
                            icon={faSearch}
                            style={{ marginRight: "5px" }}
                        />{" "}
                        Pretraži
                    </button>
                </div>
            </div>

            <div id="pom-div">
                <div id="mapa">
                    <h1>Gdje se nalazimo?</h1>

                    <div id="big-div-map">
                        <div>
                            <p>Podgorica</p>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.7823711382275!2d19.265616974972964!3d42.43236703053214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deb43a0153bb1%3A0x6eb33e7135e72d96!2zQXV0b2J1c2thIHN0YW5pY2EgUG9kZ29yaWNhLCAxIFRyZyBHb2xvb3RvxI1raWggxb1ydGF2YSwgUG9kZ29yaWNhLCDQptGA0L3QsCDQk9C-0YDQsA!5e0!3m2!1ssr!2s!4v1721750109948!5m2!1ssr!2s"
                                width="600"
                                height="450"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div>
                            <p>Bar</p>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d378993.56874377944!2d18.526033373437507!3d42.088465099999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134e73faeff4cb7b%3A0x4411890f824ecc5!2sAutobuska%20stanica%20Bar!5e0!3m2!1ssr!2s!4v1721829174162!5m2!1ssr!2s"
                                width="600"
                                height="450"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div>
                            <p>Bijelo Polje</p>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.2233820194037!2d19.74516777501198!3d43.03673129208546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1352a35759f8da87%3A0x8dc6f2daea7d82a6!2sAutobuska%20stanica%20Bijelo%20Polje!5e0!3m2!1ssr!2s!4v1721829243840!5m2!1ssr!2s"
                                width="600"
                                height="450"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div>
                            <p>Nikšić</p>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2928.871656709287!2d18.944335974994637!3d42.76991950911104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134da9aa517e28eb%3A0xdeb048d3c8ac98f!2sNiksic%20Bus%20Station!5e0!3m2!1ssr!2s!4v1721829280631!5m2!1ssr!2s"
                                width="600"
                                height="450"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div id="pom-div2">
                <div className="contact-div">
                    <img src={slika1} alt="Slika djevojke u autobusu" />
                    <div id="contact-info">
                        <h1>Kontakt</h1>
                        <div className="contact">
                            <table id="contact-table" style={{marginRight: "50px"}}>
                                <thead>
                                    <tr>
                                        <th>Stanica</th>
                                        <th>Telefon</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Podgorica</td>
                                        <td>+382 20 620 430</td>
                                    </tr>
                                    <tr>
                                        <td>Bar</td>
                                        <td>+382 85 346 141</td>
                                    </tr>
                                    <tr>
                                        <td>Sutomore</td>
                                        <td>+382 85 373 128</td>
                                    </tr>
                                    <tr>
                                        <td>Bijelo Polje</td>
                                        <td>+382 84 21 488</td>
                                    </tr>
                                    <tr>
                                        <td>Nikšić</td>
                                        <td>+382 83 213 018</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div id="pom-div3">
                <div className="novosti">
                    {news.map((news, index) => (
                        <SingleNewsMain
                            news={news}
                            key={index}
                            handleOpenModal={handleOpenModal}
                        />
                    ))}
                </div>
            </div>

            <Modal
                show={showModal}
                handleClose={handleCloseModal}
                title={currentNews.title}
                content={currentNews.content}
            />
        </main>
    );
};
