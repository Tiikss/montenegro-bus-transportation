import { useState, useEffect } from "react";
import { getLinesFiltered } from "../../services/lines";

export const TimetableFiltered = () => {
    const [lines, setLines] = useState(null);

    const fetchLines = async () => {
        try {
            const path = window.location.pathname;
            const pathSplit = path.split("/");
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
                <div>Radi</div>
            ) : (
                <div>There are no lines available</div>
            )}
        </>
    );
};
