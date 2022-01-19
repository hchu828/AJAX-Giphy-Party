console.log("Let's get this party started!");

async function getGif (event) {
  event.preventDefault();
  const formVal = document.getElementById('form-giphy').value;
  const giphyArray = await axios.get('https://api.giphy.com/v1/gifs/search', {
    params: {
      api_key: 'BiueiEqDTA5iIEyGTAgmUhRBAy4f8rSb',
      q: formVal,
      limit: 1
    }
  });
  console.log(giphyArray);

  const newGif = giphyArray.data.data[0];
  const newGifHtml = `<div class="funny-gif"><img src='${newGif.images.original.url}' width='200px' /></div>`;
  $('#gif-container').append(newGifHtml);
}

document.getElementById('submit').addEventListener('click', getGif);
