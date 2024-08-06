export const EditProfileModal = ({ show, handleClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h1>Broj telefona</h1>
                    <button onClick={handleClose} className="close-button">
                        ×
                    </button>
                </div>
                <input type="text" placeholder="Unesite broj telefona:" />
            </div>
        </div>
    );
};
