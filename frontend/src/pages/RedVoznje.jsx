import { TabelaRedVoznje } from "../components/TabelaRedVoznje";
import "../styles/redvoznje.css";

export const RedVoznje = () => {
    const handleClick = (e) => {
        const content = e.target.parentElement.parentElement.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.padding = "0 24px";
            content.style.maxHeight = null;
            content.style.marginBottom = "0";
            content.style.border = "none";
        } else {
            content.style.border = "1px solid #e0e0e0";
            content.style.marginBottom = "25px";
            content.style.padding = "40px 24px";
            content.style.maxHeight =
                content.childNodes[0].childNodes[0].scrollHeight + 40 + "px";
        }
    };

    return (
        <div className="red-voznje-content">
            <h1>Red vožnje</h1>
            <h2>Polasci sa stanice Podgorica</h2>
            <TabelaRedVoznje isEdit={false} />
        </div>
    );
};
