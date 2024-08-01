import React from "react";
import "./addnewsmodal.css";
import { updateNews } from "../../../services/news";

export const AddNewsModal = ({ id, show, handleClose, title, setTitle, content }) => {
    if (!show) {
        return null;
    }

    const handleChangeTitle = (e) => {
        setTitle({id, title: e.target.value, content});
    };

    const handleChangeContent = (e) => {
        setTitle({id, title, content: e.target.value});
    };

    const handleUpdateNews = async (e) => {
        e.preventDefault();
        console.log("ajdi",id);
        await updateNews(id, { title, content });
        handleClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <input className="modal-input" type="text" value={title} onChange={handleChangeTitle}></input>
                    <button onClick={handleClose} className="close-button">
                        ×
                    </button>
                </div>
                <div className="modal-body">
                    <textarea className="modal-input" onChange={handleChangeContent}>{content}</textarea>
                </div>
                <button className="read-more-btn" onClick={e => handleUpdateNews(e)}>Sačuvaj izmjene</button>
            </div>
        </div>
    );
};
