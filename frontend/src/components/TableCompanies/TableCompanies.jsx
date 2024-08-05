import React, { useEffect } from "react";
import { useState } from "react";
import { getCompanies } from "../../services/companies";
import { PaginationNumbers } from "../PaginationNumbers/PaginationNumbers";
import "./table-companies.css";

export const TableCompanies = () => {
    const [companies, setCompanies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);

    const fetchCompanies = async () => {
        try {
            const response = await getCompanies();
            setCompanies(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCompanies();
    }, []);

    return (
        <div className="tabela-kompanije-content">
            <table className="tabela-kompanije">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Naziv kompanije</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company) => (
                        <tr key={company.id}>
                            <td>{company.id}</td>
                            <td>{company.company_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination-numbers-container">
                <PaginationNumbers
                    selectedPageId={currentPage}
                    setPageId={setCurrentPage}
                    numberOfPages={numberOfPages}
                />
            </div>
        </div>
    );
};
