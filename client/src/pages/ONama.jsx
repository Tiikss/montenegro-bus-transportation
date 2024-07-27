import React from "react";
import "../styles/oNama.css";

const ONama = () => {
    return (
        <main id="o-nama-body">
            <h1>O nama</h1>
            
            <section className="about-section">
                <h2 className="ush2">Naša priča</h2>
                <p>
                    Autobuski prevoz Crne Gore osnovan je sa ciljem pružanja pouzdanih i udobnih usluga putnicima širom zemlje. Sa našom mrežom koja pokriva sve glavne destinacije, cilj nam je omogućiti jednostavan i siguran transport.
                </p>
            </section>

            <section className="mission-vision-section">
                <h2 className="ush2">Misija i vizija</h2>
                <p>
                    Naša misija je da obezbijedimo visokokvalitetan autobuski prevoz koji zadovoljava potrebe naših putnika. Težimo ka tome da budemo lideri u transportnoj industriji, nudeći inovativna rešenja i izvanrednu uslugu korisnicima.
                </p>
            </section>

            <section className="history-section">
                <h2 className="ush2">Istorija</h2>
                <p>
                    Počeli smo sa radom 1990. godine sa nekoliko autobusa, a danas se ponosimo flotom koja broji preko 100 vozila. Tokom godina, proširili smo naše usluge i modernizovali naše operacije kako bismo zadovoljili rastuće potrebe tržišta.
                </p>
            </section>

            <section className="team-section">
                <h2 className="ush2">Naš tim</h2>
                <p>
                    Naš tim se sastoji od iskusnih profesionalaca koji su posvećeni pružanju najbolje moguće usluge. Svaki član našeg tima igra ključnu ulogu u osiguravanju da naši putnici imaju bezbedno i prijatno putovanje.
                </p>
            </section>

            <section className="contact-section">
                <h2 className="ush2">Kontakt</h2>
                <p>
                    Adresa: Trg Golootočkih žrtava 1, Podgorica, Crna Gora <br />
                    Telefon: +382 20 123 456 <br />
                    Email: info@autobuski-prevoz.me
                </p>
            </section>
        </main>
    );
}

export default ONama;
