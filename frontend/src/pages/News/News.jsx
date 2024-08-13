import React, { useContext, useEffect, useState } from "react";
import "./news.css";
import { DropDownCard } from "../../components/DropdownCard/DropdownCard";
import { Modal } from "../../components/Modal/Modal";
import { PaginationNumbers } from "../../components/PaginationNumbers/PaginationNumbers";
import { deleteNews, getFilteredNews } from "../../services/news";
import { ModalWindow } from "../../components/ModalWindow/ModalWindow";
import { AddNewsModal } from "./AddNewsModal/AddNewsModal";
import { AuthContext } from "../../contexts/AuthContext";
import { NewsCard } from "./components/NewsCard";

export const News = () => {
    const { user } = useContext(AuthContext);

    const [news, setNews] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentNews, setCurrentNews] = useState({
        id: -1,
        title: "",
        content: "",
    });
    const [file, setFile] = useState(null);
    const [search, setSearch] = useState("");
    const [tmpNews, setTmpNews] = useState([]);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [deleteModalResponse, setDeleteModalResponse] = useState(false);
    const [selectedNews, setSelectedNews] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSetSearch = (e) => {
        setSearch(e.target.innerText);
        setNews([]);
    };

    const fetchFilteredNews = async () => {
        try {
            const response = await getFilteredNews(currentPage, search);
            setNews(response);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchFilteredNews();
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

    const fetchNews = async () => {
        try {
            const news = await getFilteredNews(currentPage, search);
            setTmpNews(news);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchNews();
    }, [showModal, isAddModalOpen]);

    useEffect(() => {
        fetchNews();
    }, []);

    useEffect(() => {
        fetchNews();
    }, [search]);

    useEffect(() => {
        if (deleteModalResponse) {
            const handleDelete = async () => {
                try {
                    await deleteNews(selectedNews);
                    fetchNews();
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
                    {user?.role_type === "Admin" && (
                        <button
                            className="read-more-btn"
                            onClick={(e) => handleAddNewNews(e)}
                        >
                            Dodaj novost
                        </button>
                    )}
                    <input
                        type="text"
                        placeholder="Pretraži objave"
                        id="search-news"
                        value={search}
                        onChange={handleChangeSearch}
                    />
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
                    file={file}
                    setFile={setFile}
                />
            </div>
            <div className="pagination-numbers-container">
                <PaginationNumbers
                    selectedPageId={currentPage}
                    setPageId={setCurrentPage}
                    numberOfPages={numberOfPages}
                />
            </div>
        </main>
    );
};
