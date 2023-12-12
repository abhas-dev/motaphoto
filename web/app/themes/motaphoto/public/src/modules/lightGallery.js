import lightGallery from 'lightgallery';

lightGallery(document.getElementById('photo-grid'));

document.getElementById('icon-fullscreen').addEventListener('click', (event) => {
        const imageSrc = event.target.getAttribute('data-src');
        const index = Array.from(document.getElementById('photo-grid').querySelectorAll('img')).findIndex(img => img.getAttribute('data-src') === imageSrc);
        document.getElementById('photo-grid').lgData.instance.goToSlide(index);

});
