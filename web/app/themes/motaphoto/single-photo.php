<?php get_header() ?>

<?php
// Récupérer l'identifiant du post actuel dans l'URL
$photo_id = get_the_ID();

$photo = get_post($photo_id);
if(is_wp_error($photo)) {
    throw new Exception('Erreur lors de la récupération des détails du post : ' . $photo->get_error_message());
}

$photoTaxonomies = get_post_taxonomies( $photo_id );
if (is_wp_error($photoTaxonomies)) {
	throw new Exception('Erreur lors de la récupération des taxonomies du post : ' . $photoTaxonomies->get_error_message());
}

$photoTerms = wp_get_post_terms( $photo_id, $photoTaxonomies );
if (is_wp_error($photoTerms)) {
	throw new Exception('Erreur lors de la récupération des termes du post : ' . $photoTerms->get_error_message());
}

$photoCategory = '';
$photoFormat = '';

foreach ($photoTerms as $term){
	if (is_a($term, 'WP_Term')) {
		if ($term->taxonomy == 'photo_category') {
			$photoCategory = $term->name;
		} else if ($term->taxonomy == 'photo_format') {
			$photoFormat = $term->name;
		}
	}
}

if ($photo): ?>
<div class="container">
    <section id="single" class="container">
        <div class="single__content">
            <div class="single__content_infos">
                <div>
                    <h2><?php the_title(); ?></h2>
                    <p class="description-photo referenceParagraph" data-photo-reference="<?php the_field('photo_reference'); ?>">Référence : <?php the_field('photo_reference'); ?></p>
                    <p class="description-photo">Catégorie : <?php echo $photoCategory; ?></p>
                    <p class="description-photo">Format : <?php  echo $photoFormat; ?></p>
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
            <div class="single__interaction_contact">
                <p>Cette photo vous interesse ?</p>
                <button class="contact btn btn-grey">contact</button>
            </div>
            <div class="single__interaction_navigate">
                <p>AAA</p>
            </div>
        </div>
    </section>

    <section id="related-content">
        <h3>Vous aimerez aussi</h3>
        <?php
        $photos = new WP_Query([
            'post_type' => 'photo',
            'posts_per_page' => 2,
            'orderby' => 'id',
            'order' => 'DESC'
        ]);

        get_template_part( 'template-parts/grid-photo-card', null, [ 'photos' => $photos]);
        ?>
        <button type="button" class="btn btn-grey btn-load-more">Toutes les photos</button>
    </section>
</div>
<?php endif; ?>


<?php get_footer() ?>
