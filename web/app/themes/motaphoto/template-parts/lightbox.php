<?php
previous_post_link( '%link', 'Photo précédente', true, '', 'photo');
$previousPhoto = mod_get_adjacent_post( 'prev', 'photo' );
?>

<div id="lightbox">
    <button class="lightbox__close"></button>
    <button
            class="lightbox__previous"
            data-testo="<?php $previousPhoto ?>"
            data-prev-src="URL_de_la_photo_precedente"
            data-prev-title="Titre_de_la_photo_precedente"
    >
        Precedent
    </button>
    <button
            class="lightbox__next"
            data-next-src="URL_de_la_photo_suivante"
            data-next-title="Titre_de_la_photo_suivante"
    >
        Suivant
    </button>
    <img class="lightbox__img" src="<?= get_theme_file_uri('/public/images/nathalie-10.jpeg') ?>" alt="">
</div>