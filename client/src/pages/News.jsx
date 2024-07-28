import React, { useEffect, useState } from "react";
import "../styles/news.css";
import { DropDownCard } from "../components/DropdownCard";
import { Modal } from "../components/Modal";

export const News = () => {
    const [news, setNews] = useState(["Naslov1", "Naslov2", "Naslov3"]);
    const [search, setSearch] = useState("");

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

    console.log(search);

    const newsData = [
        {
            title: "Naslov 1",
            date: "21. jul 2024.",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula nisl vel lacus tincidunt, ut elementum neque ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        },
        {
            title: "Naslov 2",
            date: "22. jul 2024.",
            content:
                "Curabitur quis nulla enim. Maecenas feugiat, odio a dignissim ullamcorper, sapien erat lacinia erat, non pharetra justo dolor at nisi. Proin tincidunt lectus sed metus tristique.",
        },
        {
            title: "Naslov 3",
            date: "23. jul 2024.",
            content:
                "Donec efficitur velit ac dolor sodales, ut fermentum odio pellentesque. Integer sed leo vitae nulla fringilla posuere. Integer sollicitudin mi vel nunc varius.",
        },
    ];

    const [showModal, setShowModal] = useState(false);
    const [currentNews, setCurrentNews] = useState({ title: "", content: "" });

    const handleOpenModal = (news) => {
        setCurrentNews(news);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <main id="news-body">
            <h1>Najnovije objave</h1>
            <div className="pn-cards">
                <div className="news-search-container">
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

                {newsData.map((news, index) => (
                    <div key={index} className="news-card">
                        <h2 className="news-title">{news.title}</h2>
                        <p className="news-date">Objavljeno: {news.date}</p>
                        <p className="news-content short-content">
                            {news.content.slice(0, 100)}...
                        </p>
                        <button
                            className="read-more-btn"
                            onClick={() => handleOpenModal(news)}
                        >
                            Pročitaj više
                        </button>
                    </div>
                ))}

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
