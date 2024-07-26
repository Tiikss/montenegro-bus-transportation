import React from "react";

const ModalWindow = ({ isConfirmation, isOpen }) => {
    return (
        <>
            <div
                className={"modal-container" + (isOpen ? "" : " hidden")}
            ></div>
            <div className={"overlay" + (isOpen ? "" : " hidden")}></div>
        </>
    );
};

export default ModalWindow;
