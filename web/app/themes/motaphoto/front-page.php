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
						<option value="all">Tous les tags</option>
						<option value="portrait">Portrait</option>
						<option value="paysage">Paysage</option>
						<option value="architecture">Architecture</option>
						<option value="animaux">Animaux</option>
						<option value="sport">Sport</option>
						<option value="evenement">Evénement</option>
					</select>
				</div>

				<div class="sort">
					<select name="sort" id="sort">
						<option value="all">Trier par</option>
						<option value="portrait">Portrait</option>
						<option value="paysage">Paysage</option>
						<option value="architecture">Architecture</option>
						<option value="animaux">Animaux</option>
						<option value="sport">Sport</option>
						<option value="evenement">Evénement</option>
					</select>
				</div>
			</div>

			<div class="two-columns-grid">
				<img src="public/images/nathalie-0.jpeg" alt="">
				<img src="public/images/nathalie-1.jpeg" alt="">
				<img src="public/images/nathalie-2.jpeg" alt="">
				<img src="public/images/nathalie-3.jpeg" alt="">
				<img src="public/images/nathalie-4.jpeg" alt="">
				<img src="public/images/nathalie-5.jpeg" alt="">
				<img src="public/images/nathalie-6.jpeg" alt="">
				<img src="public/images/nathalie-7.jpeg" alt="">
				<img src="public/images/nathalie-8.jpeg" alt="">
				<img src="public/images/nathalie-9.jpeg" alt="">
				<img src="public/images/nathalie-10.jpeg" alt="">
				<img src="public/images/nathalie-11.jpeg" alt="">
			</div>

			<button type="button" class="btn load-more-btn">Charger plus</button>
		</div>
	</section>

<?php get_footer(); ?>