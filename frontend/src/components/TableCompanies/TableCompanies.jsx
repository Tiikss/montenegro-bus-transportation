import React, { useEffect } from "react";
import { useState } from "react";
import { getCompanies, addCompany } from "../../services/companies";
import { PaginationNumbers } from "../PaginationNumbers/PaginationNumbers";
import "./table-companies.css";

export const TableCompanies = () => {
    const [companies, setCompanies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [companyName, setCompanyName] = useState("");

    const fetchCompanies = async () => {
        try {
            const response = await getCompanies();
            setCompanies(response);
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddNewCompany = (e) => {
        e.preventDefault();
        try {
            addCompany({ company_name: companyName });
            fetchCompanies();
            setIsModalOpen(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setCompanyName(e.target.value);
    };

    useEffect(() => {
        fetchCompanies();
    }, []);

    return (
        <>
            <button
                className="adminpanel-button"
                onClick={(e) => setIsModalOpen(true)}
            >
                Dodaj kompaniju
            </button>

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
            <div
                className={"modal-container" + (isModalOpen ? "" : " hidden")}
                style={{ display: isModalOpen ? "block" : "none" }}
            >
                <h2>Dodavanje nove kompanije</h2>
                <form className="add-company-form">
                    <label htmlFor="company-name">Naziv kompanije:</label>
                    <input
                        type="text"
                        id="company-name"
                        name="company-name"
                        value={companyName}
                        onChange={handleChange}
                    />
                    <button type="submit" onClick={handleAddNewCompany}>
                        Dodaj
                    </button>
                </form>
            </div>
            <div
                className={"overlay-modal" + (isModalOpen ? "" : " hidden")}
                onClick={() => setIsModalOpen(false)}
            ></div>
        </>
    );
};
