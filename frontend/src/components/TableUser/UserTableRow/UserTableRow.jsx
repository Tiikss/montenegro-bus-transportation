import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteUser, updateUser } from "../../../services/users";
import { ModalWindow } from "../../ModalWindow/ModalWindow";

export const UserTableRow = ({
    user,
    role,
    isEdit,
    changedUsers,
    setChangedUsers,
    isSaveClicked,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    const [modalResponse, setModalResponse] = useState(false);
    const [selectedRole, setSelectedRole] = useState(role);
    const [isChanged, setIsChanged] = useState(false);

    const handleDeleteClick = (e) => {
        e.preventDefault();
        setModalData({
            isConfirmation: true,
            title: "Brisanje korisnika",
            message: "Da li ste sigurni da zelite da obrisete korisnika?",
        });
        setIsModalOpen(true);
    };

    useEffect(() => {
        const deleteUserFunc = async () => {
            if (modalResponse && modalData.title === "Brisanje korisnika") {
                try {
                    const response = await deleteUser(user.id);
                    console.log("Response", response);
                } catch (error) {
                    console.error("Error", error);
                }
                console.log("Brisanje korisnika");
                setModalResponse(false);
            }
        };
        deleteUserFunc();
    }, [modalResponse]);

    useEffect(() => {
        if (isSaveClicked && isChanged) {
            const updateUserFunc = async () => {
                try {
                    const body = { ...user, role_type: selectedRole };
                    await updateUser(user.id, body);
                } catch (error) {
                    console.error("Error", error);
                }
            };
            updateUserFunc();
            setIsChanged(false);
        }
    }, [isSaveClicked]);

    useEffect(() => {
        console.log(selectedRole);
        if (selectedRole !== role) {
            setIsChanged(true);
            if (!changedUsers.includes(user.id))
                setChangedUsers([...changedUsers, user.id]);
        } else {
            setIsChanged(false);
            setChangedUsers(changedUsers.filter((id) => id !== user.id));
        }
    }, [selectedRole]);

    return (
        <>
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.full_name}</td>
                <td>{user.email}</td>
                <td>{user.phone_number}</td>
                {role === "Driver" && <td>{user.company_id}</td>}
                <td className="tabela-korisnici-roles">
                    <>
                        <label htmlFor="Driver">Prevoznik</label>
                        <input
                            type="radio"
                            name={"role " + user.id}
                            value="Driver"
                            checked={selectedRole === "Driver"}
                            onChange={(e) => setSelectedRole(e.target.value)}
                        />
                    </>
                    <>
                        <label htmlFor="Passenger">Korisnik</label>
                        <input
                            type="radio"
                            name={"role " + user.id}
                            value="Passenger"
                            checked={selectedRole === "Passenger"}
                            onChange={(e) => setSelectedRole(e.target.value)}
                        />
                    </>
                    <>
                        <label htmlFor="Admin">Admin</label>
                        <input
                            type="radio"
                            name={"role " + user.id}
                            value="Admin"
                            checked={selectedRole === "Admin"}
                            onChange={(e) => setSelectedRole(e.target.value)}
                        />
                    </>
                </td>
                {isEdit && (
                    <td>
                        <Link onClick={(e) => handleDeleteClick(e, user.id)}>
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
                    </td>
                )}
            </tr>
            {isModalOpen && (
                <ModalWindow
                    isConfirmation={true}
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                    title={modalData.title}
                    message={modalData.message}
                    setResponse={setModalResponse}
                />
            )}
        </>
    );
};
