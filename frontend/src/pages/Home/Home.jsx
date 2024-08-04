import React, { useEffect } from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import slika1 from "../../images/young-girl-bus.jpg";
import { Modal } from "../../components/Modal/Modal";
import { DropDownCard } from "../../components/DropdownCard/DropdownCard";
import { useState } from "react";
import { SingleNewsMain } from "./components/SingleNewsMain/SingleNewsMain";

export const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentNews, setCurrentNews] = useState({ title: "", content: "" });
    const [stations, setStations] = useState([
        "Podgorica",
        "Niksic",
        "Bar",
        "Budva",
        "Kotor",
    ]);
    const [inputs, setInputs] = useState({
        searchFrom: "",
        searchTo: "",
    });

    const newsData = [
        {
            title: "Novost",
            date: "21. jul 2024.",
            content: "Uveden je novi red vožnje za liniju Podgorica - Bar.",
        },
        {
            title: "Novost",
            date: "21. jul 2024.",
            content:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus vel quasi, molestiae dolores natus earum, similique, magni numquam quae eaque amet veniam ex asperiores maxime deserunt cumque consequuntur aperiam consequatur!",
        },
        {
            title: "Novost",
            date: "21. jul 2024.",
            content:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus vel quasi, molestiae dolores natus earum, similique, magni numquam quae eaque amet veniam ex asperiores maxime deserunt cumque consequuntur aperiam consequatur!",
        },
        {
            title: "Novost",
            date: "21. jul 2024.",
            content: "Uveden je novi red vožnje za liniju Podgorica - Bar.",
        },
    ];

    const handleOpenModal = (title, content) => {
        setCurrentNews({ title, content });
        setShowModal(true);
    };

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSetSearch = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.parentElement.parentElement.childNodes[0].id]:
                e.target.innerText,
        }));
        setStations([]);
    };

    useEffect(() => {
        const filteredStationsFrom = stations.filter((item) =>
            item.toLowerCase().includes(inputs.searchFrom.toLowerCase())
        );
        setStations(filteredStationsFrom);
        if (inputs.searchFrom === "") {
            setStations(["Podgorica", "Niksic", "Bar", "Budva", "Kotor"]);
        }
    }, [inputs.searchFrom]);

    useEffect(() => {
        const filteredStationsTo = stations.filter((item) =>
            item.toLowerCase().includes(inputs.searchTo.toLowerCase())
        );
        setStations(filteredStationsTo);
        if (inputs.searchTo === "") {
            setStations(["Podgorica", "Niksic", "Bar", "Budva", "Kotor"]);
        }
    }, [inputs.searchTo]);

    return (
        <main className="home-body">
            <div className="welcome-div">
                <h1 className="welcome-ttl">Dobrodošli!</h1>
            </div>

            <div className="red-div">
                <h1>Red vožnje</h1>

                <div className="choose">
                    <label htmlFor="beginning">Od:</label>
                    <div className="add-line-input-container">
                        <input
                            type="text"
                            placeholder="Unesite polaznu stanicu"
                            id="searchFrom"
                            value={inputs.searchFrom}
                            onChange={handleChange}
                        />
                        <div className="dropdown-container">
                            {inputs.searchFrom !== ""
                                ? stations.map((item) => (
                                      <DropDownCard
                                          item={item}
                                          key={item}
                                          onClick={handleSetSearch}
                                      />
                                  ))
                                : null}
                        </div>
                    </div>
                    <label htmlFor="end">Do:</label>
                    <div className="add-line-input-container">
                        <input
                            type="text"
                            placeholder="Unesite krajnju stanicu"
                            id="searchTo"
                            value={inputs.searchTo}
                            onChange={handleChange}
                        />
                        <div className="dropdown-container">
                            {inputs.searchTo !== ""
                                ? stations.map((item) => (
                                      <DropDownCard
                                          item={item}
                                          key={item}
                                          onClick={handleSetSearch}
                                      />
                                  ))
                                : null}
                        </div>
                    </div>
                    <label htmlFor="date">Datum:</label>
                    <input type="date" id="date" />
                    <button>
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
                            <table id="contact-table">
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
                    {newsData.map((news, index) => (
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
