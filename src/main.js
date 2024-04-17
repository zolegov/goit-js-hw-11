// import { fetchForm } from '/js/pixabay-api.js';
// console.log('fetchForm: ', fetchForm);

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const searchParams = new URLSearchParams({
  orientation: 'horizontal',
  image_type: 'photo',
  safesearch: true,
  per_page: 5,
});
const formInput = document.querySelector('.form-input');
const inputValue = formInput.value;
const APIKEY = '43173042-04092544e8d4f8f0c3df25e51';

form.addEventListener('submit', e => {
  e.preventDefault();
  const imagesFetch = document.querySelector('.imagesFetch');
  imagesFetch.innerHTML = '';
  if (formInput.value === '') {
    iziToast.error({
      title: 'Error',
      message: 'Enter search images value',
      position: 'topRight',
    });
  } else {
    fetch(
      `https://pixabay.com/api/?q=${inputValue}&${searchParams}&key=${APIKEY}`
    )
      .then(response => {
        console.log('response: ', response);
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        console.log('data: ', data);
        const result = data.hits;
        const imagesFetch = document.querySelector('.imagesFetch');

        for (const image of result) {
          const img = document.createElement('img');
          img.src = image.webformatURL;
          img.width = 100;
          imagesFetch.appendChild(img);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
});

// if (result === []) {
//           iziToast.warning({
//             title: 'Error',
//             message: '"Sorry, there are no images matching your search query. Please try again!"',
//             position: 'topRight',
//           });
//         } else {}
