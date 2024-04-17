export function fetchForm() {
  const form = document.querySelector('.form');

  form.addEventListener('submit', () => {
    const resp = fetch('https://pixabay.com/api/');
    console.log('resp: ', resp);
  });
}
