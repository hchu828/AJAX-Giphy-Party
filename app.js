console.log("Let's get this party started!");

async function getGif(event) {
    event.preventDefault();
    const formVal = document.getElementById("form-giphy").value;
    const giphyArray = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
            api_key: "BiueiEqDTA5iIEyGTAgmUhRBAy4f8rSb",
            q: formVal
        }
    });
    console.log(giphyArray.data);
}

document.getElementById("submit").addEventListener("click", getGif);