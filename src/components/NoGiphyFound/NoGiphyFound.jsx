import "./NoGiphyFound.css";
import noResultsFound from "./assets/noResultsFound.gif"

export const NoGiphyFound = () => {
    return (
        <div> <img src={noResultsFound} alt="" />
            <p className="noGiphyP"> There were no Giphy for your search.</p>
        </div>
    )
}