import React, { useEffect, useState } from "react";
import "../styles/news.css";
import DropDownCard from "../components/DropdownCard";

const News = () => {
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
                <div className="news-card">
                    <h2 className="news-title">Naslov</h2>
                    <p className="news-date">Objavljeno: 21. jul 2024.</p>
                    <p className="news-content short-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        A ratione, odit eius quod nostrum, officiis impedit
                        dolorum obcaecati, doloribus et explicabo mollitia
                        suscipit illum consequatur pariatur quo perspiciatis
                        odio consequuntur.
                    </p>
                    <button className="read-more-btn">Pročitaj više</button>
                </div>
                <div className="news-card">
                    <h2 className="news-title">Naslov</h2>
                    <p className="news-date">Objavljeno: 21. jul 2024.</p>
                    <p className="news-content short-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        A ratione, odit eius quod nostrum, officiis impedit
                        dolorum obcaecati, doloribus et explicabo mollitia
                        suscipit illum consequatur pariatur quo perspiciatis
                        odio consequuntur.
                    </p>
                    <button className="read-more-btn">Pročitaj više</button>
                </div>
                <div className="news-card">
                    <h2 className="news-title">Naslov</h2>
                    <p className="news-date">Objavljeno: 21. jul 2024.</p>
                    <p className="news-content short-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        A ratione, odit eius quod nostrum, officiis impedit
                        dolorum obcaecati, doloribus et explicabo mollitia
                        suscipit illum consequatur pariatur quo perspiciatis
                        odio consequuntur.
                    </p>
                    <button className="read-more-btn">Pročitaj više</button>
                </div>
            </div>
        </main>
    );
};

export default News;
