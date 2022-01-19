'use strict';

console.log("Let's get this party started!");

/**
 * take form value and pass to Giphy Search Endpoint
 * append gif to gif container
 * @param {event} event
 */
async function getGif (event) {
  event.preventDefault();

  const searchTermVal = $('#search-term-input').val();
  const giphyResponse = await axios.get(
    'https://api.giphy.com/v1/gifs/search',
    {
      params: {
        api_key: 'BiueiEqDTA5iIEyGTAgmUhRBAy4f8rSb',
        q: searchTermVal,
        limit: 1
      }
    }
  );

  console.log(giphyResponse);

  const newGifObj = giphyResponse.data.data[0];
  const newGifUrl = newGifObj.images.original.url;

  const newGifHtml = `<div class="funny-gif"><img src='${newGifUrl}' width='200px' /></div>`;
  $('#gif-container').append(newGifHtml);
}

/**
 * empty gif-container
 */
function removeImages () {
  $('gif-container').empty();
}
//TODO: submit event
$('#search-form').on('submit', getGif);

$('#remove').on('click', removeImages);
