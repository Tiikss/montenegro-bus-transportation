import "./singlenewsmain.css";

export const SingleNewsMain = ({ news, handleOpenModal }) => {
    return (
        <div className="novost">
            <div className="ttl-and-date">
                <h1>{news.title}</h1>
                <p className="ndate">Objavljeno: {news.date}</p>
            </div>
            <p>{news.content.substring(0, 100)}...</p>
            <button onClick={() => handleOpenModal(news.title, news.content)}>
                Pročitaj više
            </button>
        </div>
    );
};
