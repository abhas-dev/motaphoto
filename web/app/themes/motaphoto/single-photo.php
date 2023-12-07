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


// Récupérer la date personnalisée du post actuel
$date_custom = get_post_meta($photo_id, 'photo_year', true);

$previousPhoto = get_posts([
	'post_type' => 'photo',
	'meta_key' => 'photo_year',
	'meta_query' => [
		'key' => 'photo_year',
		'value' => $date_custom,
		'compare' => '<',
		'type' => 'NUMERIC',
	],
	'orderby' => 'meta_value',
	'order' => 'DESC',
	'posts_per_page' => 1
]);

$nextPhoto = get_posts([
	'post_type' => 'photo',
	'meta_key' => 'photo_year',
    'meta_query' => [
        'key' => 'photo_year',
        'value' => $date_custom,
        'compare' => '>',
        'type' => 'NUMERIC',
    ],
	'orderby' => 'meta_value',
	'order' => 'ASC',
	'posts_per_page' => 1
]);

$previousPhotoData = [
	'photoThumbnailUrl' => get_the_post_thumbnail_url($previousPhoto[0]->ID)
];

$previousPhotoThumbnailUrl= get_field('photo_image', $previousPhoto[0]->ID)['sizes']['thumbnail'];
$nextPhotoThumbnailUrl= get_field('photo_image', $nextPhoto[0]->ID)['sizes']['thumbnail'];

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
                <img src="<?= $imageObject['url']; ?>" alt="<?= $imageAlt; ?>">
            </div>
        </div>
        <div class="single__interaction"
             data-previous-thumbnail-url="<?= $previousPhotoThumbnailUrl; ?>"
             data-next-thumbnail-url="<?= $nextPhotoThumbnailUrl; ?>"
        >
            <div class="single__interaction_contact">
                <p>Cette photo vous interesse ?</p>
                <button class="contact btn btn-grey">contact</button>
            </div>
            <div class="single__interaction_navigate">
                <div class="wrapper">
                    <div class="navigation-thumbnail">
                    </div>
                    <div class="navigation-arrows">
                        <a href="<?= get_permalink($previousPhoto[0]->ID) ?>">
                            <svg class="arrow navigation-arrows__left" xmlns="http://www.w3.org/2000/svg" width="26" height="8" viewBox="0 0 26 8" fill="none">
                                <path d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM1 4.5H26V3.5H1V4.5Z" fill="black"/>
                            </svg>
                        </a>
                        <a href="<?= get_permalink($nextPhoto[0]->ID) ?>">
                            <svg class="arrow navigation-arrows__right" xmlns="http://www.w3.org/2000/svg" width="26" height="8" viewBox="0 0 26 8" fill="none">
                                <path d="M25.3536 3.64645C25.5488 3.84171 25.5488 4.15829 25.3536 4.35355L22.1716 7.53553C21.9763 7.7308 21.6597 7.7308 21.4645 7.53553C21.2692 7.34027 21.2692 7.02369 21.4645 6.82843L24.2929 4L21.4645 1.17157C21.2692 0.976311 21.2692 0.659728 21.4645 0.464466C21.6597 0.269204 21.9763 0.269204 22.1716 0.464466L25.3536 3.64645ZM25 4.5H0V3.5H25V4.5Z" fill="black"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="related-content">
        <h3>Vous aimerez aussi</h3>
        <?php
        $tax_query = [
	        'taxonomy' => 'photo_category',
	        'field'    => 'slug',
	        'terms'    => $photoCategory
        ];

        $photos = new WP_Query([
            'post_type' => 'photo',
            'tax_query' => [$tax_query],
            'posts_per_page' => 2,
            'orderby' => 'rand'

        ]);

        get_template_part( 'template-parts/grid-photo-card', null, [ 'photos' => $photos]);
        ?>
        <button type="button" class="btn btn-grey btn-load-more">Toutes les photos</button>
    </section>
</div>
<?php endif; ?>


<?php get_footer() ?>
