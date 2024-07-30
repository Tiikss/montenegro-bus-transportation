import React, { useEffect, useState } from "react";
import "./news.css";
import { DropDownCard } from "../../components/DropdownCard/DropdownCard";
import { Modal } from "../../components/Modal/Modal";
import { getNews } from "../../services/news";

export const News = () => {
    const [news, setNews] = useState(["Naslov1", "Naslov2", "Naslov3"]);
    const [search, setSearch] = useState("");
    const [tmpNews, setTmpNews] = useState([]);

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSetSearch = (e) => {
        setSearch(e.target.innerText);
        setNews([]);
    };

    useEffect(() => {
        const filteredNews = news.filter((item) =>
            item.toLowerCase().includes(search.toLowerCase())
        );
        setNews(filteredNews);
        if (search === "") {
            setNews(["Naslov1", "Naslov2", "Naslov3"]);
        }
    }, [search]);

    const [showModal, setShowModal] = useState(false);
    const [currentNews, setCurrentNews] = useState({ title: "", content: "" });

    const handleOpenModal = (news) => {
        setCurrentNews(news);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        try {
            const fetchData = async () => {
                const news = await getNews();
                setTmpNews(news);
            };
            fetchData();
        }
        catch (error) {
            console.error(error);
        }
    }, []);

    const isAdmin=true;

    return (
        <main id="news-body">
            <h1>Najnovije objave</h1>
            <div className="pn-cards">
                <div className="news-search-container">
                    <button className="read-more-btn">Dodaj novost</button>
                    <input
                        type="text"
                        placeholder="Pretraži objave"
                        id="search-news"
                        value={search}
                        onChange={handleChangeSearch}
                        style={
                            search === "" || news.length === 0
                                ? { borderRadius: "10px" }
                                : { borderRadius: "10px 10px 0 0" }
                        }
                    />
                    <div className="dropdown-container">
                        {search !== ""
                            ? news.map((item) => (
                                  <DropDownCard
                                      item={item}
                                      key={item}
                                      onClick={handleSetSearch}
                                  />
                              ))
                            : null}
                    </div>
                </div>

                {tmpNews ? tmpNews.map((news, id) => (
                    <div key={id} className="news-card">
                        <h2 className="news-title">{news.title}</h2>
                        <p className="news-date">Objavljeno: {news.created_date}</p>
                        <p className="news-content short-content">
                            {news.content.slice(0, 100)}...
                        </p>
                        <div className="news-btn-div">
                            <button
                                className="read-more-btn"
                                onClick={() => handleOpenModal(news)}
                            >
                                Pročitaj više
                            </button>
                            {isAdmin ? (
                                <div>
                                    <button className="news-admin-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2.1}
                                            stroke="currentColor"
                                            className="admin-icon"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                            />
                                        </svg></button>
                                    <button className="news-admin-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2.1}
                                            stroke="currentColor"
                                            className="admin-icon"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                            />
                                        </svg></button>
                                </div>
                            ) : null}
                        </div>
                    </div>
                )) : null}

                <Modal
                    show={showModal}
                    handleClose={handleCloseModal}
                    title={currentNews.title}
                    content={currentNews.content}
                />
            </div>
        </main>
    );
};
