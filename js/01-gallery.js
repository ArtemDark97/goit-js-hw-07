import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
};

const galleryMarkup = galleryItems
  .map(item => createGalleryItem(item))
  .join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

galleryList.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.tagName !== 'IMG') return;

  const originalImageURL = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${originalImageURL}" alt="Image">
  `);

  instance.show();
});