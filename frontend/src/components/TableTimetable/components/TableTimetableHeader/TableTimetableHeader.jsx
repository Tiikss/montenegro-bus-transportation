import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";

export const TableTimetableHeader = ({ isEdit }) => {
    const { user } = useContext(AuthContext);
    
    return (
        <li className="red-voznje-table-header">
            {isEdit && <div className="col col-0">Pocetna</div>}
            <div className="col col-1">Destinacija</div>
            <div className="col col-2">Broj autobusa</div>
            <div className="col col-3">Vrijeme polaska</div>
            <div className="col col-4">Duzina puta</div>
            <div className="col col-5">Vrijeme Polaska</div>
            {!isEdit && <div className="col col-6">Prevoznik</div>}
            <div className="col col-7">Cijena</div>
            <div className="col col-8"></div>
            {user && <div className="col col-9"></div>}
        </li>
    );
};
