import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { renderImage } from '../js/render-functions';

export function fetchImage(inputValue) {
  const APIKEY = '43173042-04092544e8d4f8f0c3df25e51';
  const searchParams = new URLSearchParams({
    orientation: 'horizontal',
    image_type: 'photo',
    safesearch: true,
    per_page: 150,
  });

  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
  fetch(
    `https://pixabay.com/api/?key=${APIKEY}&q=${inputValue}&${searchParams}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      loader.style.display = 'none';

      return response.json();
    })
    .then(data => {
      const results = data.hits;
      if (results.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      renderImage(results);
    })
    .catch(error => {
      console.log(error);
    });
}
