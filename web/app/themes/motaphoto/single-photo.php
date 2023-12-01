<?php get_header() ?>

<?php
$photo = new WP_Query([
    'post_type' => 'photo',
    'posts_per_page' => 1,
    'where' => 'title = Santé !'
]);


if (have_posts()) : while ($photo->have_posts()) : $photo->the_post(); ?>
<div class="container">
    <section id="single" class="container">
        <div class="single__content">
            <div class="single__content_infos">
                <div>
                    <h2><?php the_title(); ?></h2>
                    <p class="description-photo">Référence : <?php the_field('photo_reference'); ?></p>
                    <p class="description-photo">Catégorie : <?php the_field('photo_category'); ?></p>
                    <p class="description-photo">Format : <?php the_field('photo_format'); ?></p>
                    <p class="description-photo">Type : <?php the_field('photo_type'); ?></p>
                    <p class="description-photo">Année : <?php the_field('photo_year'); ?></p>
                </div>
            </div>
            <div class="single__content_img">
                <?php
                $imageObject =  get_field('photo_image');
                $imageUrl = $imageObject['link'];
                $imageAlt = $imageObject['alt'];
                ?>
                <img src="<?= $imageObject['url']; ?>" alt="<?= $imageAlt = $imageObject['alt']; ?>">
            </div>
        </div>
        <div class="single__interaction">
            <div class="single__interaction_contact"></div>
            <div class="single__interaction_navigate"></div>
        </div>
    </section>

    <section id="related-content">
        <h3>Vous aimerez aussi</h3>
    </section>
</div>
<?php endwhile; endif; ?>


<?php get_footer() ?>
