import { useEffect, useState } from "react";
import "./PageNavigation.css";

export const PageNavigation = ({ clickedPage, setClickedPage }) => {

    const [pageNumber, setPageNumber] = useState(5);

    const backPages = () => {
        if (pageNumber === 10) {
            setPageNumber(pageNumber - 5)
        }
    }

    const forwardPages = () => {
        if (pageNumber === 5) {
            setPageNumber(pageNumber + 5)
        }
    }

    useEffect(() => {
        if (clickedPage <= 5) {
            setPageNumber(5);
        }
    }, [clickedPage])


    return (

        <nav aria-label="Page navigation example ">
            <ul id="first" className="pagination justify-content-center mt-3">
                <li className="page-item">
                    <button className="leftArrows page-link bg-dark text-white" href="#" onClick={(backPages)}>
                        {"<<"} </button>
                </li>
                <li className="page-item page-link text-dark page" onClick={() => setClickedPage(pageNumber - 4)}>{pageNumber - 4}</li>
                <li className="page-item page-link text-dark page" onClick={() => setClickedPage(pageNumber - 3)}>{pageNumber - 3}</li>
                <li className="page-item page-link text-dark page" onClick={() => setClickedPage(pageNumber - 2)}>{pageNumber - 2}</li>
                <li className="page-item page-link text-dark page" onClick={() => setClickedPage(pageNumber - 1)}>{pageNumber - 1}</li>
                <li className="page-item page-link text-dark page" onClick={() => setClickedPage(pageNumber)}>{pageNumber}</li>
                <li className="page-item">
                    <button className="rightArrows page-link bg-dark text-white" href="#" onClick={forwardPages}> {">>"}</button>
                </li>
            </ul>
        </nav>
    )
}