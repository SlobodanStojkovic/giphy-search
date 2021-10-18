import "./Main.css";
import { getGiphy } from "../../services/getGiphy";
import { useEffect, useState } from "react";
import { NoGiphyFound } from "../NoGiphyFound/NoGiphyFound";
import searchIcon from "./assets/searchIcon.png";

export const Main = ({ clickedPage, setClickedPage }) => {

    const [inputQuery, setInputQuery] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [recievedGiphy, setReceivedGiphy] = useState([]);
    const [pageArray, setPageArray] = useState([]);

    
    const searchFunction = () => {
            setClickedPage(1);
            setSearchQuery(inputQuery);
    }

    const searchOnEnter = (event) => {
        if (event.key === "Enter") {
            searchFunction();
        }
    }


    const pageArrayFunction = () => {
        let min = (6 * clickedPage) - 6;
        let max = 6 * clickedPage;
        let showGiphy = recievedGiphy.slice(min, max);
        return showGiphy;
    }


    useEffect(() => {
        getGiphy(searchQuery)
            .then(response => {
                setReceivedGiphy(response.data)
                console.log(recievedGiphy)
            })
        pageArrayFunction();
    }, [searchQuery, clickedPage])


    useEffect(() => {
        setPageArray(pageArrayFunction)
    }, [recievedGiphy])




    return (
        <main>
            <h1>Search Giphy</h1>
            <input type="text" placeholder="Search Giphy here" onChange={e => setInputQuery(e.target.value.trim().toLowerCase())} onKeyPress={searchOnEnter} /> <button onClick={searchFunction}><img className="searchIcon" src={searchIcon} alt="" /></button>
            {(recievedGiphy.length < 1 && searchQuery.length > 0) ?
                (
                    <NoGiphyFound />
                )
                :
                (
                    <div className="giphy">
                        {
                            pageArray.map((giphy) => {
                                return (
                                    <img src={giphy.images.original.url} alt="" key={giphy.id} />
                                )
                            })
                        }

                    </div>
                )}
        </main >
    )
}
