import React from "react";
import "../styles/news.css";

const News = () => {
    return (
        <main id="news-body">
            <h1>Najnovije objave</h1>
            <div className="pn-cards">
                <input type="text" placeholder="Pretraži objave" id="search-news" />
                <div className="news-card">
                    <h2 className="news-title">Naslov</h2>
                    <p className="news-date">Objavljeno: 21. jul 2024.</p>
                    <p className="news-content short-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratione, odit eius quod nostrum, officiis impedit dolorum obcaecati, doloribus et explicabo mollitia suscipit illum consequatur pariatur quo perspiciatis odio consequuntur.
                    </p>
                    <button className="read-more-btn">Pročitaj više</button>
                </div>
                <div className="news-card">
                    <h2 className="news-title">Naslov</h2>
                    <p className="news-date">Objavljeno: 21. jul 2024.</p>
                    <p className="news-content short-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratione, odit eius quod nostrum, officiis impedit dolorum obcaecati, doloribus et explicabo mollitia suscipit illum consequatur pariatur quo perspiciatis odio consequuntur.
                    </p>
                    <button className="read-more-btn">Pročitaj više</button>
                </div>
                <div className="news-card">
                    <h2 className="news-title">Naslov</h2>
                    <p className="news-date">Objavljeno: 21. jul 2024.</p>
                    <p className="news-content short-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratione, odit eius quod nostrum, officiis impedit dolorum obcaecati, doloribus et explicabo mollitia suscipit illum consequatur pariatur quo perspiciatis odio consequuntur.
                    </p>
                    <button className="read-more-btn">Pročitaj više</button>
                </div>
            </div>
        </main>
    );
}

export default News;