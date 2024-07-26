import React, { useEffect } from "react";
import "../styles/modal-window.css";

const ModalWindow = ({
    isConfirmation,
    isOpen,
    setIsOpen,
    title,
    message,
    setResponse,
}) => {
    const handleExitClick = (e) => {
        setIsOpen(false);
    };

    return (
        <>
            <div className={"modal-container" + (isOpen ? "" : " hidden")}>
                <h2>{title}</h2>
                <p>{message}</p>

                {isConfirmation && (
                    <div className="modal-buttons">
                        <button
                            onClick={() => {
                                setResponse(true);
                                setIsOpen(false);
                            }}
                            className="modal-button"
                        >
                            Da
                        </button>
                        <button
                            onClick={() => {
                                setResponse(false);
                                setIsOpen(false);
                            }}
                            className="modal-button"
                        >
                            Ne
                        </button>
                    </div>
                )}
            </div>
            <div
                className={"overlay-modal" + (isOpen ? "" : " hidden")}
                onClick={handleExitClick}
            ></div>
        </>
    );
};

export default ModalWindow;
