const formatPhotoFilter = document.querySelector('#format');
const gallery = document.querySelector('.photo-grid');
const loadMoreBtn = document.querySelector('.btn-load-more');

if(formatPhotoFilter) {
    formatPhotoFilter.addEventListener('change', (e) => {
        fetch(motaphotoData.root_url + '/wp-json/motaphoto/v1/photos?format=' + e.target.value)
            .then(response => response.json())
            .then(data => {
                loadMoreBtn.style.display = !data.filter.length ? 'block' : 'none';
                gallery.innerHTML = data.output;
            })
            .catch(error => console.error('Erreur:', error));
    });
}


