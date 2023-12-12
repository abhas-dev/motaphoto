// import './modules/Lightbox';
import './modules/categoryPhotoFilter';
import './modules/formatPhotoFilter';
import './modules/sortPhotos';
import './modules/contactModal';
import './modules/photoNavigation';
import './modules/LoadMorePhotos';
// import './modules/lightGallery';
import { Fancybox } from "@fancyapps/ui";


Fancybox.bind('[data-fancybox="gallery"]', {
    backdropClick: false,
    contentClick: false,
    Thumbs: false,
    caption: (fancybox, slide) => {
        return `<div class="lightbox__caption">
                        <p>${slide.triggerEl?.dataset.fancyboxReference ?? ""}</p>
                        <p>${slide.triggerEl?.dataset.fancyboxCategory ?? ""}</p>
                     </div>`;
    },
    Toolbar: {
        display: {
            right: ["close"],
        },
    },
    // Make the caption the same width as the image
    Images: {
        Panzoom: {
            on: {
                refresh: (panzoom) => {
                    const caption = panzoom.content.parentElement?.nextElementSibling;
                    if (caption) {
                        caption.style.width = `${panzoom.contentRect.width}px`;
                    }
                }
            }
        }
    }
});
