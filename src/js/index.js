import style from '../scss/_styles.scss';

const image = require('../assets/images/placeholder.jpeg');
const imageContainer = document.getElementsByClassName('image')[0];

if (imageContainer) {
  const imageEl = document.createElement('img');
  imageEl.setAttribute('src', `${image}`);
  imageContainer.insertAdjacentElement('afterbegin', imageEl);
}