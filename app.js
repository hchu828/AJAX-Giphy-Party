"use strict";

console.log("Let's get this party started!");

/**
 * take form value and pass to Giphy Search Endpoint
 * append gif to gif container
 * @param {event} event 
 */
async function getGif(event) {
    event.preventDefault();
    //TODO: formVal -> searchTermVal
    const formVal = document.getElementById('form-giphy').value;
    //TODO: giphyArray -> response 
    const giphyArray = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            api_key: 'BiueiEqDTA5iIEyGTAgmUhRBAy4f8rSb',
            q: formVal,
            limit: 1
        }
    });
    console.log(giphyArray);

    const newGif = giphyArray.data.data[0];
    //TODO: make gifURL its own variable
    const newGifHtml = `<div class="funny-gif"><img src='${newGif.images.original.url}' width='200px' /></div>`;
    $('#gif-container').append(newGifHtml);
}

/**
 * empty gif-container
 */
function removeImages() {
    $("gif-container").empty();
}
//TODO: submit event
document.getElementById('submit').addEventListener('click', getGif);

$("#remove").on("click", removeImages);
