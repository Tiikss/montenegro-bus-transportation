import React from "react";
import "./pagination-numbers.css";

export const PaginationNumbers = ({
    selectedPageId,
    numberOfPages,
    setPageId,
}) => {
    const handlePageClick = (e) => {
        setPageId(Number(e.target.innerHTML));
    };

    const handleClickLeft = (e) => {
        if (selectedPageId > 3) {
            setPageId(selectedPageId - 3);
        } else {
            setPageId(1);
        }
    };

    const handleClickRight = (e) => {
        console.log(
            "userpageid: ",
            selectedPageId,
            "userpages: ",
            numberOfPages
        );

        if (selectedPageId < numberOfPages - 3) {
            setPageId(selectedPageId + 3);
        } else {
            setPageId(numberOfPages);
        }
    };

    const handleClickMaxLeft = (e) => {
        setPageId(1);
    };

    const handleClickMaxRight = (e) => {
        setPageId(numberOfPages);
    };

    return (
        <>
            <p
                className="icon-page icon-page--left"
                onClick={handleClickMaxLeft}
            >
                ↞
            </p>

            <p
                className="icon-page icon-page--left"
                onClick={handleClickLeft}
            >
                ←
            </p>

            {Array.from(
                { length: numberOfPages >= 3 ? 3 : numberOfPages },
                (_, i) => {
                    if (selectedPageId == 1) {
                        return selectedPageId + i;
                    } else if (selectedPageId < numberOfPages) {
                        return selectedPageId + i - 1;
                    } else if (numberOfPages == 2 && selectedPageId == 2) {
                        return selectedPageId + i - 1;
                    } else if (selectedPageId == numberOfPages) {
                        return selectedPageId + i - 2;
                    }
                }
            ).map((i) => (
                <button
                    key={i}
                    className={
                        "button-page " +
                        (i == selectedPageId ? "button-page--active " : "")
                    }
                    onClick={handlePageClick}
                >
                    {i}
                </button>
            ))}
            <p
                className="icon-page icon-page--right"
                onClick={handleClickRight}
            >
                →
            </p>
            <p
                className="icon-page icon-page--right"
                onClick={handleClickMaxRight}
            >
                ↠
            </p>
        </>
    );
};
