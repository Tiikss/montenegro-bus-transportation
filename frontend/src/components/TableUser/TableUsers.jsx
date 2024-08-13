import React, { useEffect, useState } from "react";
import "./table-users.css";
import { getUsersByRole, getNumberOfPagesByRole } from "../../services/users";
import { UserTableRow } from "./UserTableRow/UserTableRow";
import { PaginationNumbers } from "../PaginationNumbers/PaginationNumbers";

export const TableUsers = ({ role, isEdit, isSaveClicked }) => {
    const [users, setUsers] = useState([]);
    const [changedUsers, setChangedUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);
    const [refresh, setRefresh] = useState(false);

    const fetchUsers = async () => {
        try {
            const response = await getUsersByRole(currentPage, role);
            setUsers(response);
        } catch (error) {
            console.error("Error", error);
        }
    };

    const fetchNumberOfPages = async () => {
        try {
            const response = await getNumberOfPagesByRole(role);
            setNumberOfPages(response);
        } catch (error) {
            console.error("Error", error);
        }
    };

    useEffect(() => {
        fetchNumberOfPages();
        fetchUsers();
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [isSaveClicked]);

    useEffect(() => {
        fetchUsers();
    }, [currentPage]);

    useEffect(() => {
        if (refresh) {
            fetchUsers();
            setRefresh(false);
        }
    }, [refresh]);

    const value = localStorage.getItem('theme');
    const txtColor = value === 'light' ? 'black' : 'white';
    const bckColor = value === 'light' ? '#f9f9f9' : '#121212';

    return (
        <div className="tabela-korisnici-content">
            <table className="tabela-korisnici">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ime</th>
                        <th>Prezime</th>
                        <th>Email</th>
                        <th>Broj telefona</th>
                        {role === "Driver" && <th>Ime kompanije</th>}
                        <th>Uloga</th>
                        {isEdit && <th>Izbrisi</th>}
                    </tr>
                </thead>
                <tbody style={{backgroundColor: `${bckColor}`, color: `${txtColor}`}}>
                    {users.map((user) => (
                        <UserTableRow
                            user={user}
                            role={role}
                            isEdit={isEdit}
                            changedUsers={changedUsers}
                            setChangedUsers={setChangedUsers}
                            isSaveClicked={isSaveClicked}
                            setRefresh={setRefresh}
                        />
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
