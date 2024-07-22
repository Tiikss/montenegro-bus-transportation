import { Link } from "react-router-dom";

const DropDownCard = ({ item, key }) => {
  return (
    <Link to={`/item/${item.item_name}`} className="filter-card" key={key}>
      <div>{item.item_name}</div>
    </Link>
  );
};

export default DropDownCard;
