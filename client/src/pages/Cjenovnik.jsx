import React from "react";
import "../styles/cjenovnik.css";

const Cjenovnik = () => {
    return (
        <main id="cjenovnik-body">
            <h1>Cjenovnik autobusnih stanica Crne Gore</h1>
            
            <div id="search-container">
                <input type="text" placeholder="Pretraži stanice" id="search-prices" />
            </div>

            <div id="table-container">
                <table id="cjenovnik-table">
                    <thead>
                        <tr>
                            <th>Polazna stanica</th>
                            <th>Dolazna stanica</th>
                            <th>Cijena</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Podgorica</td>
                            <td>Bar</td>
                            <td>5.00€</td>
                        </tr>
                        <tr>
                            <td>Podgorica</td>
                            <td>Herceg Novi</td>
                            <td>12.00€</td>
                        </tr>
                        <tr>
                            <td>Podgorica</td>
                            <td>Budva</td>
                            <td>7.00€</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default Cjenovnik;
