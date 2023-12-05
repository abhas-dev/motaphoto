const categoryFilter = document.querySelector('#categories');
const gallery = document.querySelector('.photo-grid');

if(categoryFilter) {
    categoryFilter.addEventListener('change', (e) => {
        console.log(e.target.value);
        fetch(motaphotoData.root_url + '/wp-json/wp/v2/photo?photo_category=' + e.target.value)
            .then(response => response.json())
            .then(data => {
                // Ici, vous pouvez mettre à jour votre page avec les nouveaux posts
                console.log(data);


            })
            .catch(error => console.error('Erreur:', error));


        // const nextPage = loadMoreBtn.dataset.nextPage;
        // const currentUrl = window.location.href;
        // window.location.href = currentUrl + '?page=' + nextPage;
    });
}


