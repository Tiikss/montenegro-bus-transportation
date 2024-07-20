import "../styles/redvoznje.css";

const RedVoznje = () => {
  const handleClick = (e) => {
    const content = e.target.parentElement.parentElement.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.padding = "0 24px";
      content.style.maxHeight = null;
      content.style.marginBottom = "0";
      content.style.border = "none";
    } else {
      content.style.border = "1px solid #e0e0e0";
      content.style.marginBottom = "25px";
      content.style.padding = "40px 24px";
      content.style.maxHeight =
        content.childNodes[0].childNodes[0].scrollHeight + 40 + "px";
    }
  };

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
        <li className="red-voznje-table-row red-voznje-row-hover">
          <div className="col col-1">Beograd</div>
          <div className="col col-2">1</div>
          <div className="col col-3">9:00</div>
          <div className="col col-4">2h: 30min</div>
          <div className="col col-5">11:30</div>
          <div className="col col-6">Autoprevoz</div>
          <div className="col col-7">10€</div>
          <div className="col col-8">
            <input
              type="checkbox"
              className="plus-minus"
              onClick={(e) => handleClick(e)}
            />
          </div>
        </li>
        <li className="col-content">
          <div className="col">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quae repellendus quos non, hic aut eveniet recusandae,
              ducimus repudiandae quibusdam similique, officia ullam unde!
              Necessitatibus facilis officia modi quibusdam ab! Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Modi deserunt et
              expedita omnis, magnam facilis ad quaerat unde beatae corporis,
              consequatur sunt dicta ipsam ducimus, nemo cupiditate? Odit,
              accusamus laborum? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur quae repellendus quos non, hic aut
              eveniet recusandae, ducimus repudiandae quibusdam similique,
              officia ullam unde! Necessitatibus facilis officia modi quibusdam
              ab! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              deserunt et expedita omnis, magnam facilis ad quaerat unde beatae
              corporis, consequatur sunt dicta ipsam ducimus, nemo cupiditate?
              Odit, accusamus laborum? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur quae repellendus quos non, hic aut
              eveniet recusandae, ducimus repudiandae quibusdam similique,
              officia ullam unde! Necessitatibus facilis officia modi quibusdam
              ab! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              deserunt et expedita omnis, magnam facilis ad quaerat unde beatae
              corporis, consequatur sunt dicta ipsam ducimus, nemo cupiditate?
              Odit, accusamus laborum? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur quae repellendus quos non, hic aut
              eveniet recusandae, ducimus repudiandae quibusdam similique,
              officia ullam unde! Necessitatibus facilis officia modi quibusdam
              ab! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              deserunt et expedita omnis, magnam facilis ad quaerat unde beatae
              corporis, consequatur sunt dicta ipsam ducimus, nemo cupiditate?
              Odit, accusamus laborum?
            </p>
          </div>
        </li>
        <li className="red-voznje-table-row red-voznje-row-hover">
          <div className="col col-1">Beograd</div>
          <div className="col col-2">1</div>
          <div className="col col-3">9:00</div>
          <div className="col col-4">2h: 30min</div>
          <div className="col col-5">11:30</div>
          <div className="col col-6">Autoprevoz</div>
          <div className="col col-7">10€</div>
          <div className="col col-8">
            <input
              type="checkbox"
              className="plus-minus"
              onClick={(e) => handleClick(e)}
            />
          </div>
        </li>
        <li className="col-content">
          <div className="col">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quae repellendus quos non, hic aut eveniet recusandae,
              ducimus repudiandae quibusdam similique, officia ullam unde!
              Necessitatibus facilis officia modi quibusdam ab! Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Modi deserunt et
              expedita omnis, magnam facilis ad quaerat unde beatae corporis,
              consequatur sunt dicta ipsam ducimus, nemo cupiditate? Odit,
              accusamus laborum? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur quae repellendus quos non, hic aut
              eveniet recusandae, ducimus repudiandae quibusdam similique,
              officia ullam unde! Necessitatibus facilis officia modi quibusdam
              ab! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              deserunt et expedita omnis, magnam facilis ad quaerat unde beatae
              corporis, consequatur sunt dicta ipsam ducimus, nemo cupiditate?
              Odit, accusamus laborum? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur quae repellendus quos non, hic aut
              eveniet recusandae, ducimus repudiandae quibusdam similique,
              officia ullam unde! Necessitatibus facilis officia modi quibusdam
              ab! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              deserunt et expedita omnis, magnam facilis ad quaerat unde beatae
              corporis, consequatur sunt dicta ipsam ducimus, nemo cupiditate?
              Odit, accusamus laborum? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur quae repellendus quos non, hic aut
              eveniet recusandae, ducimus repudiandae quibusdam similique,
              officia ullam unde! Necessitatibus facilis officia modi quibusdam
              ab! Lorem ipsum, dolor sit amet consectetur
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RedVoznje;
