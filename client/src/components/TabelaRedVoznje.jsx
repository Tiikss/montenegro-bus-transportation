import React from "react";
import { Link } from "react-router-dom";
import "../styles/tabela-red-voznje.css";

const TabelaRedVoznje = ({ isEdit }) => {
    const handleClick = (e) => {
        const content = e.target.parentElement.parentElement.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.padding = "0 24px";
            content.style.maxHeight = null;
            content.style.marginBottom = "0";
            content.style.border = "none";
        } else {
            content.style.border = "1px solid #e0e0e0";
            content.style.marginBottom = "25px";
            content.style.padding = "40px 24px";
            content.style.maxHeight =
                content.childNodes[0].childNodes[0].scrollHeight + 40 + "px";
        }
    };

    return (
        <ul className="red-voznje-table">
            <li className="red-voznje-table-header">
                {isEdit && <div className="col col-0">Pocetna</div>}
                <div className="col col-1">Destinacija</div>
                <div className="col col-2">Broj autobusa</div>
                <div className="col col-3">Vrijeme polaska</div>
                <div className="col col-4">Duzina puta</div>
                <div className="col col-5">Vrijeme Polaska</div>
                {!isEdit && <div className="col col-6">Prevoznik</div>}
                <div className="col col-7">Cijena</div>
                <div className="col col-8"></div>
                <div className="col col-9"></div>
            </li>
            <li className="red-voznje-table-row red-voznje-row-hover">
                {isEdit && <div className="col col-0">Podgorica</div>}
                <div className="col col-1">Beograd</div>
                <div className="col col-2">1</div>
                <div className="col col-3">9:00</div>
                <div className="col col-4">2h: 30min</div>
                <div className="col col-5">11:30</div>
                {!isEdit && <div className="col col-6">Autoprevoz</div>}
                <div className="col col-7">10€</div>
                <div className="col col-8">
                    <input
                        type="checkbox"
                        className="plus-minus"
                        onClick={(e) => handleClick(e)}
                    />
                </div>
                {isEdit && (
                    <div className="col col-9">
                        <Link>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.1}
                                stroke="currentColor"
                                className="admin-icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                />
                            </svg>
                        </Link>
                        <Link>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.1}
                                stroke="currentColor"
                                className="admin-icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                            </svg>
                        </Link>
                    </div>
                )}
            </li>
            <li className="col-content">
                <div className="col">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur quae repellendus quos non, hic aut eveniet
                        recusandae, ducimus repudiandae quibusdam similique,
                        officia ullam unde! Necessitatibus facilis officia modi
                        quibusdam ab! Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Modi deserunt et expedita omnis,
                        magnam facilis ad quaerat unde beatae corporis,
                        consequatur sunt dicta ipsam ducimus, nemo cupiditate?
                        Odit, accusamus laborum? Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Aspernatur quae
                        repellendus quos non, hic aut eveniet recusandae,
                        ducimus repudiandae quibusdam similique, officia ullam
                        unde! Necessitatibus facilis officia modi quibusdam ab!
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Modi deserunt et expedita omnis, magnam facilis ad
                        quaerat unde beatae corporis, consequatur sunt dicta
                        ipsam ducimus, nemo cupiditate? Odit, accusamus laborum?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur quae repellendus quos non, hic aut eveniet
                        recusandae, ducimus repudiandae quibusdam similique,
                        officia ullam unde! Necessitatibus facilis officia modi
                        quibusdam ab! Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Modi deserunt et expedita omnis,
                        magnam facilis ad quaerat unde beatae corporis,
                        consequatur sunt dicta ipsam ducimus, nemo cupiditate?
                        Odit, accusamus laborum? Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Aspernatur quae
                        repellendus quos non, hic aut eveniet recusandae,
                        ducimus repudiandae quibusdam similique, officia ullam
                        unde! Necessitatibus facilis officia modi quibusdam ab!
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Modi deserunt et expedita omnis, magnam facilis ad
                        quaerat unde beatae corporis, consequatur sunt dicta
                        ipsam ducimus, nemo cupiditate? Odit, accusamus laborum?
                    </p>
                </div>
            </li>
            <li className="red-voznje-table-row red-voznje-row-hover">
                {isEdit && <div className="col col-0">Budva</div>}
                <div className="col col-1">Beograd</div>
                <div className="col col-2">1</div>
                <div className="col col-3">9:00</div>
                <div className="col col-4">2h: 30min</div>
                <div className="col col-5">11:30</div>
                {!isEdit && <div className="col col-6">Autoprevoz</div>}
                <div className="col col-7">10€</div>
                <div className="col col-8">
                    <input
                        type="checkbox"
                        className="plus-minus"
                        onClick={(e) => handleClick(e)}
                    />
                </div>
                {isEdit && (
                    <div className="col col-9">
                        <Link>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.1}
                                stroke="currentColor"
                                className="admin-icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                />
                            </svg>
                        </Link>
                        <Link>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.1}
                                stroke="currentColor"
                                className="admin-icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                            </svg>
                        </Link>
                    </div>
                )}
            </li>
            <li className="col-content">
                <div className="col">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur quae repellendus quos non, hic aut eveniet
                        recusandae, ducimus repudiandae quibusdam similique,
                        officia ullam unde! Necessitatibus facilis officia modi
                        quibusdam ab! Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Modi deserunt et expedita omnis,
                        magnam facilis ad quaerat unde beatae corporis,
                        consequatur sunt dicta ipsam ducimus, nemo cupiditate?
                        Odit, accusamus laborum? Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Aspernatur quae
                        repellendus quos non, hic aut eveniet recusandae,
                        ducimus repudiandae quibusdam similique, officia ullam
                        unde! Necessitatibus facilis officia modi quibusdam ab!
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Modi deserunt et expedita omnis, magnam facilis ad
                        quaerat unde beatae corporis, consequatur sunt dicta
                        ipsam ducimus, nemo cupiditate? Odit, accusamus laborum?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur quae repellendus quos non, hic aut eveniet
                        recusandae, ducimus repudiandae quibusdam similique,
                        officia ullam unde! Necessitatibus facilis officia modi
                        quibusdam ab! Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Modi deserunt et expedita omnis,
                        magnam facilis ad quaerat unde beatae corporis,
                        consequatur sunt dicta ipsam ducimus, nemo cupiditate?
                        Odit, accusamus laborum? Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Aspernatur quae
                        repellendus quos non, hic aut eveniet recusandae,
                        ducimus repudiandae quibusdam similique, officia ullam
                        unde! Necessitatibus facilis officia modi quibusdam ab!
                        Lorem ipsum, dolor sit amet consectetur
                    </p>
                </div>
            </li>
        </ul>
    );
};

export default TabelaRedVoznje;
