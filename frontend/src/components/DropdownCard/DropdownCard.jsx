import "./dropdowncard.css";

export const DropDownCard = ({ item, key, onClick }) => {
    return (
        <div onClick={onClick} className="dropdown-card" key={key}>
            <p className="ddcp">{item.address || item.company_name}</p>
        </div>
    );
};
