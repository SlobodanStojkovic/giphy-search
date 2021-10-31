const apiKey = "WgOIx0GBcvOzAsdv9FxICFs7PXeK5IKv";

export const getGiphy = (search) => {
    return fetch("https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + apiKey + "&limit=50")
        .then(data => data.json())
        .then(info => info)
}