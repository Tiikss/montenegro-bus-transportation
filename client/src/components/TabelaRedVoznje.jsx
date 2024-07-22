import React from "react";
import { Link } from "react-router-dom";
import "../styles/tabela-red-voznje.css";
import TabelaRedVoznjeHeader from "./TableRedVoznjeHeader";
import TableRedVoznjeRow from "./TableRedVoznjeRow";
import TableRedVoznjeContent from "./TableRedVoznjeContent";

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
            <TableRedVoznjeContent />
            <TableRedVoznjeRow isEdit={isEdit} handleClick={handleClick} />
            <TableRedVoznjeContent />
        </ul>
    );
};

export default TabelaRedVoznje;
