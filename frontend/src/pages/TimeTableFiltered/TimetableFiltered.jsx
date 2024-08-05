import { useState, useEffect } from "react";
import { getLinesFiltered } from "../../services/lines";
import { TableTimetable } from "../../components/TableTimetable/TableTimetable";
import "./timetablefiltered.css";

export const TimetableFiltered = () => {
    const [lines, setLines] = useState(null);
    const [lineDetails, setLineDetails] = useState(null);

    const fetchLines = async () => {
        try {
            const path = window.location.pathname;
            const pathSplit = path.split("/");
            setLineDetails({
                start: pathSplit[2],
                end: pathSplit[3],
                date: pathSplit[4],
            });
            const linesApi = await getLinesFiltered(
                true,
                1,
                pathSplit[2],
                pathSplit[3],
                pathSplit[4]
            );
            setLines(linesApi);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchLines();
    }, []);

    return (
        <>
            {lines && lines.length > 0 ? (
                <div className="red-voznje-content">
                    <h1>
                        Red vožnje za liniju: {lineDetails.start}-
                        {lineDetails.end}
                        <br />
                        Dana: {lineDetails.date}
                    </h1>
                    <TableTimetable
                        isEdit={false}
                        isActive={1}
                        filter={lineDetails}
                    />
                </div>
            ) : (
                <div className="filtered-timetable-container">
                    <h1>Tražena linija ne postoji ili ne saobraća tog dana.</h1>
                </div>
            )}
        </>
    );
};
