<?php

add_action('rest_api_init', 'motaphotoRegisterPhotoRoute');

function motaphotoRegisterPhotoRoute():void {
	register_rest_route('motaphoto/v1', '/photo',
		[
		'methods' => WP_REST_SERVER::READABLE,
		'callback' => 'motaphotoGetPhotos'
	]);

	// Load more photos route (pagination)
	register_rest_route('motaphoto/v1', '/photo/(?P<page>\d+)', [
		'methods' => WP_REST_SERVER::READABLE,
		'callback' => 'motaphotoGetPhotos',
	]);

	// Filtered photos route
	register_rest_route('motaphoto/v1', '/photo/(?P<category>[a-zA-Z0-9-]+)/(?P<format>[a-zA-Z0-9-]+)', [
		'methods' => WP_REST_SERVER::READABLE,
		'callback' => 'motaphotoGetFilteredPhotos',
	]);
}

function motaphotoGetPhotos( $data ) {

}

function motaphotoGetFilteredPhotos($data): WP_Error|array {
	$taxQuery = [];

	if ($data['category'] && $data['category'] !== 'all') {
		$taxQuery[] = [
			'taxonomy' => 'photo_category',
			'field' => 'slug',
			'terms' => $data['category']
		];
	}

	if ($data['format'] && $data['format'] !== 'all') {
		$taxQuery[] = [
			'taxonomy' => 'photo_format',
			'field' => 'slug',
			'terms' => $data['format']
		];
	}

	$photos = new WP_Query([
		'post_type' => 'photo',
		'tax_query' => $taxQuery,
		'posts_per_page' => 12,
//		'paged' => get_query_var('paged') ?: 1
	]);

	if ( empty( $photos ) ) {
		return new WP_Error( 'no_photo', "Il n'y a pas de photos", ['status' => 404] );
	}

	$photosData = [];

	while ($photos->have_posts()) {
		$photos->the_post();
		$photosData[] = [
			'id' => get_the_ID(),
			'title' => get_the_title(),
			'category' => !empty(get_the_terms(get_post(), 'photo_category')) ? get_the_terms(get_post(), 'photo_category')[0]->name : '',
			'format' => !empty(get_the_terms(get_post(), 'photo_format')) ? get_the_terms(get_post(), 'photo_format')[0]->name : '',
			'imageObject' => get_field('photo_image'),
			'permalink' => get_permalink(),
		];
	}

	wp_reset_postdata();

	return $photosData;
}
