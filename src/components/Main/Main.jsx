import "./Main.css";
import { getGiphy } from "../../services/getGiphy";
import { useEffect, useState } from "react";

export const Main = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [recievedGiphy, setReceivedGiphy] = useState([]);

    const searchFunction = (event) => {
        if (event.key === 'Enter') {
            setSearchQuery(event.target.value.trim().toLowerCase())
        }
    }

    useEffect(() => {
        getGiphy(searchQuery)
            .then(response => setReceivedGiphy(response.data))
    }, [searchQuery])

    return (
        <main>
            <h1>Search Giphy</h1>
            <input type="text" placeholder="Search Giphy here" onKeyPress={searchFunction} />
            <div className="giphy">
                {
                    recievedGiphy.map((giphy) => {
                        return (
                            <img src={giphy.images.original.url} alt="" key={giphy.id} />
                        )
                    })
                }
            </div>
        </main>
    )
}