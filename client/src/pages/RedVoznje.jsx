import "../styles/redvoznje.css";

const RedVoznje = () => {
  return (
    <div className="red-voznje-content">
      <h1>Red vožnje</h1>
      <h2>Polasci sa stanice Podgorica</h2>
      <ul className="red-voznje-table">
        <li className="red-voznje-table-header">
          <div className="col col-1">Destinacija</div>
          <div className="col col-2">Broj autobusa</div>
          <div className="col col-3">Vrijeme polaska</div>
          <div className="col col-4">Duzina puta</div>
          <div className="col col-5">Vrijeme Polaska</div>
          <div className="col col-6">Prevoznik</div>
          <div className="col col-7">Cijena</div>
          <div className="col col-8"></div>
        </li>
        <li className="red-voznje-table-row">
          <div className="col col-1">Beograd</div>
          <div className="col col-2">1</div>
          <div className="col col-3">9:00</div>
          <div className="col col-4">2h: 30min</div>
          <div className="col col-5">11:30</div>
          <div className="col col-6">Autoprevoz</div>
          <div className="col col-7">10€</div>
          <div className="col col-8">
            <input type="checkbox" className="plus-minus" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RedVoznje;
