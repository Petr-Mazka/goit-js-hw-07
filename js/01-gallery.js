import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


// Функция для первого задания.

const gallery = document.querySelector('.gallery');

const doFirstTask = () => {

const createGallery = (galleryItems) => {
    gallery.insertAdjacentHTML('afterbegin', galleryItems.map(item => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}" onclick="event.preventDefault()">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="Image description"
            title="${item.description}"
            />
        </a>
        </div>`;
    }).join(''));
}
createGallery(galleryItems);

gallery.addEventListener('click', onClick);
function onClick(e) {
    if (e.target.nodeName !== "IMG") {
        return;
    }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">`)
  
  instance.show();
  
  if (instance.visible()) {
    window.addEventListener('keydown', (e) => { 
       if (e.key === "Escape") {
    instance.close();
    window.addEventListener('click', (e) => { 
     instance.close();
    });
  }});

}}
}
  
doFirstTask();