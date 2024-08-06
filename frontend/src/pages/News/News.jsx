import React, { useEffect, useState } from "react";
import "./news.css";
import { DropDownCard } from "../../components/DropdownCard/DropdownCard";
import { Modal } from "../../components/Modal/Modal";
import { deleteNews, getNews, updateNews, addNews } from "../../services/news";
import { ModalWindow } from "../../components/ModalWindow/ModalWindow";
import { AddNewsModal } from "./AddNewsModal/AddNewsModal";
import { AuthContext } from "../../contexts/AuthContext";
import { NewsCard } from "./components/NewsCard";

export const News = () => {
    const [news, setNews] = useState(["Naslov1", "Naslov2", "Naslov3"]);
    const [showModal, setShowModal] = useState(false);
    const [currentNews, setCurrentNews] = useState({
        id: -1,
        title: "",
        content: "",
    });
    const [search, setSearch] = useState("");
    const [tmpNews, setTmpNews] = useState([]);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [deleteModalResponse, setDeleteModalResponse] = useState(false);
    const [selectedNews, setSelectedNews] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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

    const handleOpenModal = (news) => {
        setCurrentNews(news);
        setShowModal(true);
    };

    const handleOpenAddModal = (news) => {
        setCurrentNews(news);
        setIsAddModalOpen(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setIsAddModalOpen(false);
    };

    useEffect(() => {
        console.log("umro", currentNews.id);
    }, [currentNews]);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const news = await getNews(1);
                setTmpNews(news);
            };
            fetchData();
        } catch (error) {
            console.error(error);
        }
    }, []);

    const handleDeleteClick = (e, id) => {
        e.preventDefault();
        setIsDeleteModalOpen(true);
        setSelectedNews(id);
    };

    const handleAddNewNews = (e) => {
        e.preventDefault();
        setCurrentNews({ id: -1, title: "", content: "" });
        setIsAddModalOpen(true);
    };

    useEffect(() => {
        if (deleteModalResponse) {
            const handleDelete = async () => {
                try {
                    await deleteNews(selectedNews);
                } catch (error) {
                    console.error(error);
                }
            };
            handleDelete();
            setIsDeleteModalOpen(false);
            setDeleteModalResponse(false);
            setSelectedNews(null);
        }
    }, [deleteModalResponse]);

    return (
        <main id="news-body">
            <h1>Najnovije objave</h1>
            <div className="pn-cards">
                <div className="news-search-container">
                    <button
                        className="read-more-btn"
                        onClick={(e) => handleAddNewNews(e)}
                    >
                        Dodaj novost
                    </button>
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

                {tmpNews
                    ? tmpNews.map((news) => (
                          <NewsCard
                              key={news.id}
                              news={news}
                              handleOpenModal={handleOpenModal}
                              handleDeleteClick={handleDeleteClick}
                              handleOpenAddModal={handleOpenAddModal}
                          />
                      ))
                    : null}

                <Modal
                    show={showModal}
                    handleClose={handleCloseModal}
                    title={currentNews.title}
                    content={currentNews.content}
                />
                {isDeleteModalOpen && (
                    <ModalWindow
                        isConfirmation={true}
                        title={"Brisanje objave"}
                        message={
                            "Da li ste sigurni da želite obrisati ovu objavu?"
                        }
                        isOpen={isDeleteModalOpen}
                        setIsOpen={setIsDeleteModalOpen}
                        setResponse={setDeleteModalResponse}
                    />
                )}
                <AddNewsModal
                    show={isAddModalOpen}
                    handleClose={handleCloseModal}
                    title={currentNews.title}
                    setTitle={setCurrentNews}
                    content={currentNews.content}
                    id={currentNews.id}
                    isEdit={currentNews.id !== -1}
                />
            </div>
        </main>
    );
};
