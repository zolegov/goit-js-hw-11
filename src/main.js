// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImage } from './js/pixabay-api';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const formInput = document.querySelector('.form-input');
  const inputValue = formInput.value.trim();
  if (formInput.value === '') {
    iziToast.error({
      title: 'Error',
      message: 'Enter search images value',
      position: 'topRight',
    });
    return;
  }

  const imagesFetch = document.querySelector('.imagesFetch');
  fetchImage(inputValue);
  imagesFetch.innerHTML = '';
  formInput.value = '';
});

//   const APIKEY = '43173042-04092544e8d4f8f0c3df25e51';
//   const searchParams = new URLSearchParams({
//     orientation: 'horizontal',
//     image_type: 'photo',
//     safesearch: true,
//     per_page: 150,
//   });
//   fetch(
//     `https://pixabay.com/api/?key=${APIKEY}&q=${inputValue}&${searchParams}`
//   )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       loader.style.display = 'none';

//       return response.json();
//     })
//     .then(data => {
//       const results = data.hits;
//       if (results.length === 0) {
//         iziToast.warning({
//           title: 'Error',
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//           position: 'topRight',
//         });
//       }
//       renderImage(results);
//       formInput.value = '';

//       let gallery = new SimpleLightbox('.gallery a');
//       gallery.refresh();
//     })
//     .catch(error => {
//       console.log(error);
//     });

// const imagesFetch = document.querySelector('.imagesFetch');

// const markup = results.reduce((html, result) => {
//   console.log('result: ', result);
//   return (html += `
//     <li class="imagesFetch-item">
//     <div class="gallery">
//            <a href="${result.largeImageURL}">
//               <img src="${result.webformatURL}" alt="1"/>
//            </a>
//     </div>
//     <div class="imagesFetch-item-description">
//         <ul class="description-list">
//         <li class="description-list-item">
//             <p class="item-name">Likes</p>
//             <span>${result.likes}</span>
//         </li>
//         <li class="description-list-item">
//             <p class="item-name">Views</p>
//             <span>${result.views}900290</span>
//         </li>
//         <li class="description-list-item">
//             <p class="item-name">Comments</p>
//             <span>${result.comments}229</span>
//         </li>
//         <li class="description-list-item">
//             <p class="item-name">Downloads</p>
//             <span>${result.downloads}610937</span>
//         </li>
//         </ul>
//     </div>
//     </li>  `);
// }, '');
// imagesFetch.insertAdjacentHTML('beforeend', markup);
