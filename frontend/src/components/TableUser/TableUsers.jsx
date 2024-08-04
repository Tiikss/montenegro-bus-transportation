import React, { useEffect, useState } from "react";
import "./table-users.css";
import { Link } from "react-router-dom";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { getUsersByRole, deleteUser } from "../../services/users";
import { UserTableRow } from "./UserTableRow/UserTableRow";

export const TableUsers = ({ role, isEdit, isSaveClicked }) => {
    const [users, setUsers] = useState([]);
    const [changedUsers, setChangedUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await getUsersByRole(1, role);
            setUsers(response);
            console.log("Users", users);
        } catch (error) {
            console.error("Error", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        console.log("changed users: ", changedUsers);
    }, [changedUsers]);

    useEffect(() => {
        fetchUsers();
    }, [isSaveClicked]);

    return (
        <>
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
                <tbody>
                    {users.map((user) => (
                        <UserTableRow
                            user={user}
                            role={role}
                            isEdit={isEdit}
                            changedUsers={changedUsers}
                            setChangedUsers={setChangedUsers}
                            isSaveClicked={isSaveClicked}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
};
