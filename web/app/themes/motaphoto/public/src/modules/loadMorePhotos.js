const loadMoreBtn = document.querySelector('.btn-load-more');
const gallery = document.querySelector('.photo-grid');
let loadedPhotos = 12;

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        fetch(motaphotoData.root_url + '/wp-json/wp/v2/photo?per_page=12&offset=' + loadedPhotos)
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    console.log(data);
                } else {
                    loadMoreBtn.style.display = 'none';
                }
            })
            .catch(error => {
                console.error('Erreur lors du chargement des photos : ', error);
            });
    });
}