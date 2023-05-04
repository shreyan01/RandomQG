const endpoint = 'https://quote-garden.herokuapp.com/api/v3/quotes/random';
const quoteText = document.querySelector('#quote');
const authorText = document.querySelector('#author');
const newQuoteBtn = document.querySelector('#new-quote');

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const quote = data.data[0].quoteText;
    const author = data.data[0].quoteAuthor;

    quoteText.textContent = quote;
    authorText.textContent = `- ${author}`;
  })
  .catch(error => console.log(error));

newQuoteBtn.addEventListener('click', () => {
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      const quote = data.data[0].quoteText;
      const author = data.data[0].quoteAuthor;

      quoteText.textContent = quote;
      authorText.textContent = `- ${author}`;
    })
    .catch(error => console.log(error));
});
