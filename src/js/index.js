import style from '../scss/_styles.scss';

const image = require('../assets/images/placeholder.jpg');
const imageContainer = document.getElementsByClassName('image')[0];

if (imageContainer) {
  imageContainer.innerHTML = `<img src=${image} />`;
}