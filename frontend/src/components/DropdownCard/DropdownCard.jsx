import "./dropdowncard.css";

export const DropDownCard = ({ item, key, onClick }) => {
    return (
        <div onClick={onClick} className="dropdown-card" key={key}>
            <p className="ddcp">{item}</p>
        </div>
    );
};
