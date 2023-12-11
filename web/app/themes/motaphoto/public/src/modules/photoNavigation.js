const thumbnailDiv = document.querySelector('.navigation-thumbnail');
const interactionSection = document.querySelector('.single__interaction');
const leftArrow = document.querySelector('.navigation-arrows__left');
const rightArrow = document.querySelector('.navigation-arrows__right');

if (interactionSection) {
    const previousThumbnailUrl = interactionSection.dataset.previousThumbnailUrl;
    const nextThumbnailUrl = interactionSection.dataset.nextThumbnailUrl;
    const thumbnail = document.createElement('img');
    thumbnail.style.display = 'none';
    thumbnailDiv.appendChild(thumbnail);

    leftArrow.style.display = previousThumbnailUrl === '' ? 'none' : 'block';
    rightArrow.style.display = nextThumbnailUrl === '' ? 'none' : 'block';

    leftArrow.addEventListener('mouseover', () => {
        if (previousThumbnailUrl !== '') {
            thumbnail.style.display = 'block';
            thumbnail.src = previousThumbnailUrl;
        }
    });

    rightArrow.addEventListener('mouseover', () => {
        if (nextThumbnailUrl !== '') {
            thumbnail.style.display = 'block';
            thumbnail.src = nextThumbnailUrl;
        }
    });
}