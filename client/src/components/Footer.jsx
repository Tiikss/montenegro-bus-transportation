import React from "react";
import "../styles/footer.css";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faFacebook,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="info-footer">
                    <img src={logo} alt="Logo"></img>
                    <div>
                        <p>Cassiopeia d.o.o.</p>
                        <p>Adresa: Trg Golootočkih žrtava 1</p>
                        <p>81000 Podgorica, Crna Gora</p>
                    </div>
                </div>
                <div className="footer-icn-div">
                    <div className="ins-fb-icn">
                        <p className="footer-p">Pratite nas:</p>
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="footer-icn"
                        />
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="footer-icn"
                        />
                        <FontAwesomeIcon
                            icon={faXTwitter}
                            className="footer-icn"
                        />
                    </div>
                    <div>
                        <p>Autobuska stanica Podgorica: +382 20 620 430</p>
                        <p>Autobuska stanica Nikšić: +382 83 213 018</p>
                        <p>Autobuska stanica Sutomore: +382 85 373 128</p>
                        <p>Autobuska stanica Kolašin: +382 81 864 033</p>
                    </div>
                </div>
                <div className="rights-footer">
                    <p className="footer-p">
                        &copy; 2024 Autobuski prevoz Crne Gore | Sva prava
                        zadržana | AVJTU
                    </p>
                </div>
            </div>
        </footer>
    );
};
