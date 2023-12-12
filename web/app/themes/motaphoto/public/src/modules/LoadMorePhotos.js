// import Lightbox from './Lightbox';

class LoadMorePhotos {
    constructor(loadMoreBtnSelector, gallerySelector) {
        this.loadMoreBtn = document.querySelector(loadMoreBtnSelector);
        this.gallery = document.querySelector(gallerySelector);
        this.currentPage = 1;
        this.loadedPhotos = 12;

        if (this.loadMoreBtn) {
            this.loadMoreBtn.addEventListener('click', this.loadMore.bind(this));
        }

        // this.lightbox = new Lightbox();
    }

    loadMore(e) {
        e.preventDefault();
        try {
            fetch(`${motaphotoData.root_url}/wp-json/motaphoto/v1/photos/load-more?offset=${this.loadedPhotos}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erreur lors du chargement des photos');
                    }
                    return response.json();
                })
                .then(data => {
                    if (!data || data.html.length === 0) {
                        console.log('Aucun contenu disponible.');
                        const noMoreContentMessage = document.createElement('p');
                        noMoreContentMessage.classList.add('no-content-message');
                        noMoreContentMessage.textContent = "Il n'y a plus de contenu à afficher.";
                        this.loadMoreBtn.replaceWith(noMoreContentMessage);
                    } else {
                        this.gallery.insertAdjacentHTML('beforeend', data.html);
                        this.loadedPhotos += 12;
                        this.lightbox.updatePhotoData();
                        this.lightbox.reattachLightboxEvents();
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        } catch (error) {
            console.error('erreur dans le try catch: ', error);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const loadMorePhotos = new LoadMorePhotos('.btn-load-more', '.photo-grid');
});