import { useState } from "react";
import { updateUser } from "../../../../services/users";

export const EditProfileModal = ({ show, handleClose, user }) => {
    const [input, setInput] = useState(
        user.phone_number == "000000000" ? null : user.phone_number
    );
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const updateUserFunc = async () => {
        try {
            await updateUser(user.id, user);
        } catch (error) {
            console.log(error);
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (input === null || input === "") {
            setError("Unesite broj telefona.");
            return;
        }

        if (input.length !== 9) {
            setError("Broj telefona mora sadržavati 9 cifara.");
            return;
        }

        setError(null);

        user.phone_number = input;

        updateUserFunc();
        window.location.reload();
    };

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
                <input
                    type="number"
                    placeholder="Unesite broj telefona:"
                    value={input}
                    onChange={handleInputChange}
                />
                {error && <p className="error-message">{error}</p>}
                <button
                    className="btnsty"
                    id="save-btn"
                    onClick={(e) => handleClick(e)}
                >
                    Sačuvaj izmjene
                </button>
            </div>
        </div>
    );
};
