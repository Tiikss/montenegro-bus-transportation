import "./singlenewsmain.css";
import logo from "../../../../images/logo-crop.png";

const value = localStorage.getItem('theme');
const borderColor = value === 'light' ? '#00000033' : '#9e9e9e33';
const boxShadow = value === 'light' ? '5px 5px 5px #00000033' : '5px 5px 5px #9e9e9e33';
const bckColor = value === 'light' ? '#f9f9f9' : '#121212';

export const SingleNewsMain = ({ news, handleOpenModal }) => {
    const date = news.created_date.split("T")[0].split("-");
    const currDate = date[2] + "." + date[1] + "." + date[0];
    return (
        <div className="novost" style={{border: `1px solid ${borderColor}`, boxShadow: `${boxShadow}`, backgroundColor: `${bckColor}`}}>
            <img
                src={news.image ? news.image : logo}
                alt="logo"
                className={news.image ? "home-news-img" : "home-news-img--logo"}
            />
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
