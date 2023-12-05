const loadMoreBtn = document.querySelector('.btn-load-more');
const gallery = document.querySelector('.photo-grid');
let currentPage = 1;
let loadedPhotos = 12;

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // fetch(motaphotoData.root_url + '/wp-json/motaphoto/v1/photos?offset=' + loadedPhotos)
        fetch(motaphotoData.root_url + '/wp-json/motaphoto/v1/photos/load-more')
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    console.log(data);
                } else {
                    console.log(data);
                    gallery.innerHTML += data.cards;

                    loadedPhotos += 12;
                    loadMoreBtn.style.display = 'none';
                }
            })
            .catch(error => {
                console.error('Erreur lors du chargement des photos : ', error);
            });
    });
}