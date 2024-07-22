import React from "react";
import { Link } from "react-router-dom";
import "../styles/tabela-red-voznje.css";
import TabelaRedVoznjeHeader from "./TableRedVoznjeHeader";
import TableRedVoznjeRow from "./TableRedVoznjeRow";

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
            <TabelaRedVoznjeHeader isEdit={isEdit} />
            <TableRedVoznjeRow isEdit={isEdit} handleClick={handleClick} />
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
            <TableRedVoznjeRow isEdit={isEdit} handleClick={handleClick} />
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
