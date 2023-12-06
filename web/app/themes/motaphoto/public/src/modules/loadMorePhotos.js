const loadMoreBtn = document.querySelector('.btn-load-more');
const gallery = document.querySelector('.photo-grid');
let currentPage = 1;
let loadedPhotos = 12;

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        try {
            fetch(`${motaphotoData.root_url}/wp-json/motaphoto/v1/photos/load-more?offset=${loadedPhotos}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erreur lors du chargement des photos');
                    }
                    return response.json();
                })
                .then(data => {
                    if (!data || data.html.length === 0) {
                        console.log('Aucun contenu disponible.');
                        // loadMoreBtn.style.display = 'none';
                        const noMoreContentMessage = document.createElement('p');
                        noMoreContentMessage.classList.add('no-content-message');
                        noMoreContentMessage.textContent = "Il n'y a plus de contenu à afficher.";
                        loadMoreBtn.replaceWith(noMoreContentMessage);
                    } else {
                        gallery.innerHTML += data.html;
                        loadedPhotos += 12;
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        } catch (error) {
            console.error('erreur dans le try catch: ', error);

        }

    });
}

// .then(data => {
//     console.log(data);
//     if (data.length === 0) {
//         loadMoreBtn.style.display = 'none';
//         console.log('plus de contenu');
//         // A
//     } else {
//         gallery.innerHTML += data.html;
//
//         loadedPhotos += 12;
//         // loadMoreBtn.style.display = 'none';
//     }
// })