const categoryPhotoFilter = document.querySelector('#categories');
const gallery = document.querySelector('.photo-grid');
const loadMoreBtn = document.querySelector('.btn-load-more');

if(categoryPhotoFilter) {
    categoryPhotoFilter.addEventListener('change', (e) => {
        fetch(motaphotoData.root_url + '/wp-json/motaphoto/v1/photos?category=' + e.target.value)
            .then(response => response.json())
            .then(data => {
                loadMoreBtn.style.display = 'none';
                console.log(data)
                gallery.innerHTML = data.output;
            })
            .catch(error => console.error('Erreur:', error));
    });
}


