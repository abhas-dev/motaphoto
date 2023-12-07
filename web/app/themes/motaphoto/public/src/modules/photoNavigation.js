const arrows = document.querySelectorAll('.arrow');
const thumbnailDiv = document.querySelector('.navigation-thumbnail');
const interactionSection = document.querySelector('.single__interaction');

if(interactionSection) {
    const previousThumbnailUrl = interactionSection.dataset.previousThumbnailUrl;
    const nextThumbnailUrl = interactionSection.dataset.nextThumbnailUrl;
    const thumbnail = document.createElement('img');
    thumbnail.style.display = 'none';
    thumbnailDiv.appendChild(thumbnail);

    arrows.forEach(arrow => arrow.addEventListener('mouseover', (e) => {
        thumbnail.style.display = 'block';
        if (e.target.classList.contains('navigation-arrows__left')) {
            thumbnail.src = previousThumbnailUrl;
        } else if (e.target.classList.contains('navigation-arrows__right')) {
            thumbnail.src = nextThumbnailUrl;
        }
    }));

}