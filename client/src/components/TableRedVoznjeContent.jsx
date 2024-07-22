import "../styles/tableredvoznjecontent.css";
import Linija from "./Linija";

const TableRedVoznjeContent = ({ departure, isEdit }) => {
    console.log(departure.stations);
    return (
        <li className="col-content">
            <div className="col table-row-description">
                <h3>Broj autobusa: {departure.busID}</h3>
                <h4>
                    {departure.startingPoint}-{departure.destination}
                    <br></br>
                    <br></br>
                    {departure.departureTime}-{departure.arrivalTime}
                </h4>
                <div className="table-line-container">
                    <Linija
                        stations={departure.stations}
                        isEdit={isEdit}
                        handleEditClick={() => {}}
                        handleDeleteClick={() => {}}
                    />
                </div>
            </div>
        </li>
    );
};

export default TableRedVoznjeContent;
