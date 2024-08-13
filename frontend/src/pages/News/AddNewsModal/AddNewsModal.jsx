import React from "react";
import "./addnewsmodal.css";
import { updateNews, addNews, addNewsImage } from "../../../services/news";

export const AddNewsModal = ({
    id,
    show,
    handleClose,
    title,
    setTitle,
    content,
    isEdit,
    file,
    setFile,
}) => {
    if (!show) {
        return null;
    }

    const handleChangeTitle = (e) => {
        setTitle({ id, title: e.target.value, content });
    };

    const handleChangeContent = (e) => {
        setTitle({ id, title, content: e.target.value });
    };

    const handleUpdateNews = async (e) => {
        e.preventDefault();
        console.log(file);

        let newsId;
        if (isEdit) {
            const response = await updateNews(id, { title, content });
            newsId = response.id;
        } else {
            const response = await addNews({ title, content });
            newsId = response.id;
        }

        handleClose();
        if (file) {
            const image = new FormData();
            image.append("image", file);
            const response = await addNewsImage(newsId, image);
        }

        setTitle({ id: -1, title: "", content: "" });
    };

    const handleChangeFile = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <input
                        className="modal-input"
                        placeholder="Naslov"
                        type="text"
                        value={title}
                        onChange={handleChangeTitle}
                    ></input>
                    <button onClick={handleClose} className="close-button">
                        ×
                    </button>
                </div>
                <div className="modal-body">
                    <input
                        type="file"
                        className="modal-input"
                        onChange={handleChangeFile}
                        multiple={false}
                    />
                </div>
                <div className="modal-body">
                    <textarea
                        className="modal-input"
                        onChange={handleChangeContent}
                    >
                        {content}
                    </textarea>
                </div>
                <button
                    className="read-more-btn"
                    onClick={(e) => handleUpdateNews(e)}
                >
                    Sačuvaj izmjene
                </button>
            </div>
        </div>
    );
};
