const apiKey = "WgOIx0GBcvOzAsdv9FxICFs7PXeK5IKv";

export const getGiphy = (search) => {
    return fetch("http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + apiKey + "&limit=6")
        .then(data => data.json())
        .then(info => info)
}