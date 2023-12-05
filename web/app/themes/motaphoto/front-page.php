<?php get_header(); ?>

<?php
$photoCategories = get_terms([
    'taxonomy' => 'photo_category',
    'hide_empty' => false,
]);

$photoFormats = get_terms([
    'taxonomy' => 'photo_format',
    'hide_empty' => false,
]);
?>
	<section id="hero" class="hero" style="background-image: url(<?= get_theme_file_uri('public/images/nathalie-10.jpeg') ?>)">
		<h1>Photographe Event</h1>
	</section>

	<section class="content">
		<div class="container">
			<div class="options">
				<div class="filters">
					<select name="filters--categories" id="categories">
                        <option value="all">Toutes les Categories</option>
                        <?php
                        foreach ($photoCategories as $category) { ?>
                            <option value="<?= $category->slug; ?>"><?= $category->name; ?></option>
                        <?php } ?>
					</select>

					<select name="filters--tags" id="filters--tags">
                        <option value="all">Tous les Formats</option>
                        <?php
                        foreach ($photoFormats as $format) { ?>
                            <option value="<?= $format->term_taxonomy_id; ?>"><?= $format->name; ?></option>
                        <?php } ?>
					</select>
				</div>

				<div class="sort">
					<select name="sort" id="sort">
						<option value="all">Trier par</option>
						<option value="asc">De la plus ancienne à la plus récente</option>
						<option value="desc">De la plus récente à la plus ancienne</option>
					</select>
				</div>
			</div>
            <?php
            $photos = new WP_Query([
                'post_type' => 'photo',
                'posts_per_page' => 12,
                'orderby' => 'date',
                'order' => 'DESC'
            ]);

            get_template_part( 'template-parts/grid-photo-card', null, [ 'photos' => $photos]);
            ?>
            <button type="button" class="btn btn-grey btn-load-more">Charger plus</button>
		</div>
	</section>

<?php get_footer(); ?>