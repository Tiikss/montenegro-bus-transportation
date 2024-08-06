import "./singlenewsmain.css";
import logo from "../../../../images/logo-crop.png";

export const SingleNewsMain = ({ news, handleOpenModal }) => {
    const date = news.created_date.split("T")[0].split("-");
    const currDate = date[2] + "." + date[1] + "." + date[0];
    return (
        <div className="novost">
            <img src={logo} alt="logo" />
            <div className="ttl-and-date">
                <h1>{news.title}</h1>
                <p className="ndate">Objavljeno: {currDate}</p>
            </div>
            <p>{news.content.substring(0, 100)}...</p>
            <button onClick={() => handleOpenModal(news.title, news.content)}>
                Pročitaj više
            </button>
        </div>
    );
};
