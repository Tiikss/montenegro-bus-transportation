import React, { useEffect, useState } from "react";
import "./admin-panel.css";
import { TableUsers } from "../../components/TableUser/TableUsers";
import { TableTimetable } from "../../components/TableTimetable/TableTimetable";
import { TableStations } from "../../components/TableStation/TableStations";
import { activateLine } from "../../services/lines";

export const AdminPanel = () => {
    const [selectedTab, setSelectedTab] = useState("korisnici");
    const [response, setResponse] = useState(null);
    const [isSaveClicked, setIsSaveClicked] = useState(false);

    const handleTabClick = (e) => {
        e.preventDefault();
        setSelectedTab(e.target.textContent.toLowerCase());
    };
    const handleSaveChanges = (e) => {
        e.preventDefault();
        setIsSaveClicked(true);
    };

    const handleResponseApi = async (id) => {
        try {
            await activateLine(id, response.response === "accept");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (response) {
            handleResponseApi(response.id);
            setResponse(null);
        }
    }, [response]);

    useEffect(() => {
        if (isSaveClicked) {
            setIsSaveClicked(false);
        }
    }, [isSaveClicked]);

    return (
        <main className="adminpanel-body">
            <h1>Admin Panel</h1>
            <div className="adminpanel-buttons">
                <button className="adminpanel-button" onClick={handleTabClick}>
                    Korisnici
                </button>
                <button className="adminpanel-button" onClick={handleTabClick}>
                    Linije
                </button>
                <button className="adminpanel-button" onClick={handleTabClick}>
                    Stanice
                </button>
                <button className="adminpanel-button" onClick={handleTabClick}>
                    Obavjestenja
                </button>
            </div>
            <div className="adminpanel-content">
                {selectedTab == "korisnici" && (
                    <>
                        <h2>Korisnici</h2>
                        <TableUsers
                            role="Passenger"
                            isEdit={true}
                            isSaveClicked={isSaveClicked}
                        />
                        <h2>Prevoznici</h2>
                        <TableUsers
                            role="Driver"
                            isEdit={true}
                            isSaveClicked={isSaveClicked}
                        />
                        <h2>Administratori</h2>
                        <TableUsers
                            role="Admin"
                            isEdit={true}
                            isSaveClicked={isSaveClicked}
                        />
                        <button
                            className="adminpanel-button"
                            onClick={handleSaveChanges}
                        >
                            Sacuvaj izmjene
                        </button>
                    </>
                )}
                {selectedTab == "linije" && (
                    <>
                        <h2>Linije na cekanju</h2>
                        <TableTimetable
                            isEdit={true}
                            isAdmin={true}
                            handleResponse={setResponse}
                            isActive={false}
                        />
                        <h2>Aktivne linije</h2>
                        <TableTimetable
                            isEdit={true}
                            isAdmin={true}
                            isActive={true}
                        />
                    </>
                )}
                {selectedTab == "stanice" && (
                    <>
                        <h2>Stanice</h2>
                        <TableStations />
                    </>
                )}
            </div>
        </main>
    );
};
