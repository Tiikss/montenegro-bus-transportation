import React from "react";
import { Link } from "react-router-dom";
import "../styles/tabela-red-voznje.css";
import TabelaRedVoznjeHeader from "./TableRedVoznjeHeader";
import TableRedVoznjeRow from "./TableRedVoznjeRow";
import TableRedVoznjeContent from "./TableRedVoznjeContent";

const TabelaRedVoznje = ({ isEdit }) => {
    return (
        <ul className="red-voznje-table">
            <TabelaRedVoznjeHeader isEdit={isEdit} />
            <TableRedVoznjeRow isEdit={isEdit}/>
            <TableRedVoznjeContent />
            <TableRedVoznjeRow isEdit={isEdit}/>
            <TableRedVoznjeContent />
        </ul>
    );
};

export default TabelaRedVoznje;
