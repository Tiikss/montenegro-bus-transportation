import React from "react";
import "./addnewsmodal.css";

export const AddNewsModal = ({ show, handleClose, title, setTitle, content }) => {
    if (!show) {
        return null;
    }

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <input className="modal-input" type="text" value={title} onChange={handleChange}></input>
                    <button onClick={handleClose} className="close-button">
                        ×
                    </button>
                </div>
                <div className="modal-body">
                    <textarea className="modal-input">{content}</textarea>
                </div>
                <button className="read-more-btn">Sačuvaj izmjene</button>
            </div>
        </div>
    );
};
