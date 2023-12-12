<!--<div id="lightbox">-->
<!--    <button class="lightbox__close"></button>-->
<!--    <p>-->
<!--        Precedent-->
<!--        <button class="lightbox__previous"></button>-->
<!--    </p>-->
<!--    <p>-->
<!--        Suivant-->
<!--        <button class="lightbox__next" data-next-src="URL_de_la_photo_suivante" data-next-title="Titre_de_la_photo_suivante"></button>-->
<!--    </p>-->
<!--    <img class="lightbox__img" src="--><?php //= get_theme_file_uri('/public/images/nathalie-10.jpeg') ?><!--" alt="">-->
<!--</div>-->

<div id="lightbox">
    <div class="content">
        <img class="lightbox__img" src="<?= get_theme_file_uri('/public/images/nathalie-10.jpeg') ?>" alt="">
        <div class="controls">
            <nav class="lightbox__previous">
                <span>Précédent</span>
                <img src="<?= get_theme_file_uri('/public/images/arrow.svg') ?>" alt="Fleche precedent">
            </nav>
            <nav class="lightbox__next">
                <span>Suivant</span>
                <img src="<?= get_theme_file_uri('/public/images/arrow.svg') ?>" alt="Fleche suivant">
            </nav>
        </div>
    </div>
    <button class="lightbox__close"></button>
</div>