import React from "react";
import "../styles/linija.css";

const Linija = () => {
    return (
        <div class="timeline">
            <div class="outer">
                <div class="card">
                    <div class="info">
                        <h3 class="title">Niksic</h3>
                        <p>Naziv Stanice: Autobuska stanica Niksic</p>
                        <p>Vrijeme polaska: 07:34</p>
                    </div>
                </div>
                <div class="card">
                    <div class="info">
                        <h3 class="title">Niksic</h3>
                        <p>Naziv Stanice: Ostrog</p>
                        <p>Vrijeme dolaska: 07:50</p>
                        <p>Vrijeme polaska: 07:51</p>
                    </div>
                </div>
                <div class="card">
                    <div class="info">
                        <h3 class="title">Danilovgrad</h3>
                        <p>Naziv Stanice: Kruzni tok Danilovgrad</p>
                        <p>Vrijeme dolaska: 08:04</p>
                        <p>Vrijeme polaska: 08:05</p>
                    </div>
                </div>
                <div class="card">
                    <div class="info">
                        <h3 class="title">Podgorica</h3>
                        <p>Naziv Stanice: Delta City</p>
                        <p>Vrijeme dolaska: 08:25</p>
                        <p>Vrijeme polaska: 08:26</p>
                    </div>
                </div>
                <div class="card">
                    <div class="info">
                        <h3 class="title">Podgorica</h3>
                        <p>Naziv Stanice: Autobuska stanica Podgorica</p>
                        <p>Vrijeme dolaska: 08:35</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Linija;
