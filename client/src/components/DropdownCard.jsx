import { Link } from "react-router-dom";

const DropDownCard = ({ item, key }) => {
  return (
    <Link to={`./`} className="dropdown-card" key={key}>
      <div>{item}</div>
    </Link>
  );
};

export default DropDownCard;
