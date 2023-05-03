const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4,5,6,7,8,9,10,11,12];
const selectedIndex = null;

imageIndexes.forEach((i) => {
    const image = document.createElement('img');
    image.src = `elements/gallery-img-${i}.jpg`;
    image.alt = `Gallery image  number ${i} from Jo Smith`;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        //popup stuff
        popup.style.transform = `translateY(0)`;
        selectedImage.src= `elements/gallery-img-${i}.jpg`;
        selectedImage.alt = `Gallery image  number ${i} from Jo Smith`;
    });


    gallery.appendChild(image);
});

popup.addEventListener('click', () => {
    popup.style.transform = `translateY(-100%)`;
    popup.src = '';
    popup.alt = '';
})