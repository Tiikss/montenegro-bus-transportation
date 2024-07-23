import "../styles/dropdowncard.css";

const DropDownCard = ({ item, key, onClick }) => {
  return (
    <div onClick={onClick} className="dropdown-card" key={key}>
      <p>{item}</p>
    </div>
  );
};

export default DropDownCard;
