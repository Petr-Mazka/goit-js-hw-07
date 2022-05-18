import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const createGallery = () => {
    return galleryItems.map(( {preview, original, description}) => {
        return `<a class="gallery__item" href="${original}" onclick="event.preventDefault()" ><img class="gallery__image scr="${preview}" alt="${description}" /></a>`;
    })
    .join('');
}
createGallery();

const createdGallery = createGallery(galleryItems);
gallery.insertAdjacentHTML('afterbegin', createdGallery);