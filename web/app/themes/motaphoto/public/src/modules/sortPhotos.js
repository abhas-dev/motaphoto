const sortSelect = document.querySelector('#sort');
const gallery = document.querySelector('.photo-grid');

if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
        console.log(e.target.value)
        fetch(`${motaphotoData.root_url}/wp-json/motaphoto/v1/photos?sort=${e.target.value}`)
            .then(response => response.json())
            .then(data => {
                gallery.innerHTML = data.output;
            })
            .catch(error => console.error('Erreur:', error));
    })
}