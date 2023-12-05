<?php

class PhotoCustomRoute extends WP_REST_Controller {
	public function __construct (
		protected $namespace = 'motaphoto/v1',
		protected readonly string $base = 'photos',
		private readonly string $version = '1'
	) {
		add_action( 'rest_api_init', [ $this, 'register_routes' ] );
	}

	public function register_routes(): void {
		// Load more photos route (pagination)
		register_rest_route( $this->namespace, '/' . $this->base . '/load-more', [
			'methods'  => WP_REST_Server::READABLE,
			'callback' => [ $this, 'get_more_photos' ],
		] );

		register_rest_route( $this->namespace, '/' . $this->base, [
			'methods'  => WP_REST_Server::READABLE,
			'callback' => [ $this, 'index' ],
			'args' => [
				'category' => [
					'required' => false,
					'validate_callback' => function($param, $request, $key) {
						return is_string($param);
					}
				],
				'format' => [
					'required' => false,
					'validate_callback' => function($param, $request, $key) {
						return is_string($param);
					}
				],
			]
		] );

//		// Filtered photos route
//		register_rest_route( $this->namespace, '/' . $this->base . '/(?P<category>[a-zA-Z0-9-]+)/(?P<format>[a-zA-Z0-9-]+)', [
//			'methods'  => WP_REST_Server::READABLE,
//			'callback' => [ $this, 'get_filtered_photos' ],
//		] );

//		register_rest_route( $this->namespace, '/' . $this->base, [
//			'methods'  => WP_REST_Server::READABLE,
//			'callback' => [ $this, 'get_photos' ],
//		] );
	}

//	public function get_photos( WP_REST_Request $request ): WP_Error|WP_REST_Response {
//
//	}

	public function index( WP_REST_Request $request ): WP_Error|WP_REST_Response {
		$taxQuery = [];

		if ( $request['category'] && $request['category'] !== 'all' ) {
			$taxQuery[] = [
				'taxonomy' => 'photo_category',
				'field'    => 'slug',
				'terms'    => $request['category']
			];
		}

		if ( $request['format'] && $request['format'] !== 'all' ) {
			$taxQuery[] = [
				'taxonomy' => 'photo_format',
				'field'    => 'slug',
				'terms'    => $request['format']
			];
		}

		$photos = new WP_Query( [
			'post_type' => 'photo',
			'tax_query' => $taxQuery,
			'posts_per_page' => 12,
			'orderby' => 'date',
			'order' => 'DESC',
			'paged' => $request['page'] ?: 1
		] );

		$photosData = [];

		if($photos->have_posts()) {
			ob_start();
			while ( $photos->have_posts() ) {
				$photos->the_post();
				$htmlContent .= get_template_part('template-parts/photo-card', null, [
					'imageUrl' => get_field('photo_image')['url'],
					'imageAlt' => get_field('photo_image')['alt'],
					'title' => get_the_title(),
					'category' => !empty(get_the_terms(get_post(), 'photo_category')) ? get_the_terms(get_post(), 'photo_category')[0]->name : '',
					'format' => get_the_terms(get_post(), 'photo_format')[0]->name,
				]);
			}

			$output = ob_get_contents();
			ob_end_clean();
		} else {
			return new WP_Error( 'no_photo', "Il n'y a pas de photos", [ 'status' => 404 ] );
		}

		return new WP_REST_Response( compact('output'), 200 );
	}

	public function get_more_photos( WP_REST_Request $request ): WP_Error|WP_REST_Response {

		$photos = new WP_Query([
			'post_type' => 'photo',
			'posts_per_page' => 12,
			'offset' => ($request['page'] - 1) * 12,
			'orderby' => 'date',
			'order' => 'DESC'
		]);

		$photoCards = [];
		$response = '';
		$currentPage = $request['page'] ?: 1;

		if ($photos->have_posts()) {
			ob_start();
			while ($photos->have_posts()) {
				$photos->the_post();
				$htmlContent .= get_template_part('template-parts/photo-card', null, [
					'imageObject' => get_field('photo_image'),
					'title' => get_the_title(),
					'category' => get_the_terms(get_post(), 'photo_category')[0]->name,
					'format' => get_the_terms(get_post(), 'photo_format')[0]->name,
				]);
			}

			$output = ob_get_contents();
			ob_end_clean();
		} else {
			return new WP_Error( 'no_photo', "Il n'y a pas de photos", [ 'status' => 404 ] );
		}

		$response = [
			'html' => $output,
			'currentPage' => $currentPage,
			'maxPages' => $photos->max_num_pages,
		];

		return new WP_REST_Response( $response, 200 );

	}

}