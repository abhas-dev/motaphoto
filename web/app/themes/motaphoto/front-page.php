<?php get_header(); ?>

	<section id="hero" class="hero" style="background-image: url(<?= get_theme_file_uri('public/images/nathalie-10.jpeg') ?>)">
		<h1>Photographe Event</h1>
	</section>

	<section class="content">
		<div class="container">
			<div class="options">
				<div class="filters">
					<select name="filters--categories" id="categories">
						<option value="all">Categories</option>
						<option value="portrait">Portrait</option>
						<option value="paysage">Paysage</option>
						<option value="architecture">Architecture</option>
						<option value="animaux">Animaux</option>
						<option value="sport">Sport</option>
						<option value="evenement">Evénement</option>
					</select>

					<select name="filters--tags" id="filters--tags">
						<option value="all">Tous les Formats</option>
						<option value="portrait">Portrait</option>
						<option value="paysage">Paysage</option>
					</select>
				</div>

				<div class="sort">
					<select name="sort" id="sort">
						<option value="all">Trier par</option>
						<option value="portrait">De la plus ancienne à la plus récente</option>
						<option value="portrait">De la plus récente à la plus ancienne</option>
					</select>
				</div>
			</div>

            <div class="two-columns-grid">
            <?php
            $photos = new WP_Query([
                'post_type' => 'photo',
                'posts_per_page' => 12,
                'orderby' => 'id',
                'order' => 'DESC'
            ]);

            if ($photos->have_posts()){
                while ($photos->have_posts()){
                    $photos->the_post();
                    $imageObject =  get_field('photo_image');
                    echo "<a href=" . esc_url(get_permalink()) . "><img src=" . esc_url($imageObject['url']) ." alt=" . esc_attr($imageObject['alt']) . "></a>";
                }
            }
            ?>
            </div>
            <button type="button" class="btn btn-grey btn-load-more">Charger plus</button>
		</div>
	</section>

<?php get_footer(); ?>