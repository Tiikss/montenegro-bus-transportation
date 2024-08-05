export const TimetableFiltered = () => {
    const path = window.location.pathname;
    const pathSplit = path.split("/");
    const start = pathSplit[2];
    const end = pathSplit[3];
    const date = pathSplit[4];
    return (
        <div>
            <p>{start}</p>
            <p>{end}</p>
            <p>{date}</p>
        </div>
    );
};
