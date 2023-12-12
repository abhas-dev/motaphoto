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
			'args'     => [
				'category' => [
					'required'          => false,
					'validate_callback' => function ( $param, $request, $key ) {
						return is_string( $param );
					}
				],
				'format'   => [
					'required'          => false,
					'validate_callback' => function ( $param, $request, $key ) {
						return is_string( $param );
					}
				],
			]
		] );
	}

	public function index( WP_REST_Request $request ): WP_Error|WP_REST_Response {
		$taxQuery = [];

		if ($request['category'] && $request['category'] !== 'all') {
			$taxQuery[] = [
				'taxonomy' => 'photo_category',
				'field'    => 'slug',
				'terms'    => $request['category']
			];
		}

		if ($request['format'] && $request['format'] !== 'all') {
			$taxQuery[] = [
				'taxonomy' => 'photo_format',
				'field'    => 'slug',
				'terms'    => $request['format']
			];
		}

		try {
			$photos = new WP_Query( [
				'post_type' => 'photo',
				'tax_query' => $taxQuery,
				'posts_per_page' => 12,
				'orderby' => 'date',
				'order' => $request['sort'] ?? 'DESC',
				'paged' => $request['page'] ?: 1
			] );
		} catch (Exception $exception) {
			return new WP_Error( 'no_photo', "Il n'y a pas de photos" . $exception, [ 'status' => 404 ] );
		}

		if($photos->have_posts()) {
			ob_start();
			while ( $photos->have_posts() ) {
				$photos->the_post();
				get_template_part('template-parts/photo-card', null, [
					'imageUrl' => get_field('photo_image')['url'],
					'imageAlt' => get_field('photo_image')['alt'],
					'title' => get_the_title(),
					'category' => !empty(get_the_terms(get_post(), 'photo_category')) ? get_the_terms(get_post(), 'photo_category')[0]->name : '',
					'format' => get_the_terms(get_post(), 'photo_format')[0]->name,
					'ref' => get_field('photo_reference')
				]);
			}

			$output = ob_get_contents();
			ob_end_clean();

			$response = [
				'output' => $output,
				'filter' => $taxQuery ?? ''
			];
		} else {
			return new WP_REST_Response( [
				'status' => 'no_photo',
				'message' => "Il n'y a plus de photo"
			],
			204
			);
		}

		return new WP_REST_Response( $response, 200 );
	}

	public function get_more_photos( WP_REST_Request $request ): WP_Error|WP_REST_Response|string {

		$photos = new WP_Query([
			'post_type' => 'photo',
			'posts_per_page' => 12,
//			'page' => ($request['page'] - 1) * 12,
			'offset' => $request['offset'],
			'orderby' => 'date',
			'order' => 'DESC'
		]);

		$htmlContent = '';
		$response = '';
		$currentPage = $request['page'] ?: 1;

		if ($photos->have_posts()) {
			ob_start();
			while ($photos->have_posts()) {
				$photos->the_post();
				$htmlContent .= get_template_part('template-parts/photo-card', null, [
					'imageUrl' => get_field('photo_image')['url'],
					'imageAlt' => get_field('photo_image')['alt'],
					'title' => get_the_title(),
					'category' => get_the_terms(get_post(), 'photo_category')[0]->name,
					'format' => get_the_terms(get_post(), 'photo_format')[0]->name,
					'ref' => get_field('photo_reference')
				]);
			}

			$output = ob_get_contents();
			ob_end_clean();

			$response = [
				'html' => $output,
				'currentPage' => $currentPage,
				'maxPages' => $photos->max_num_pages,
				'offset' => $request['offset']
			];
		} else {
			$response = [
				'html' => '',
				'message' => "Il n'y a plus de photo"
			];
		}

		return new WP_REST_Response( $response, 200 );
	}

}



//		// Filtered photos route
//		register_rest_route( $this->namespace, '/' . $this->base . '/(?P<category>[a-zA-Z0-9-]+)/(?P<format>[a-zA-Z0-9-]+)', [
//			'methods'  => WP_REST_Server::READABLE,
//			'callback' => [ $this, 'get_filtered_photos' ],
//		] );

//		register_rest_route( $this->namespace, '/' . $this->base, [
//			'methods'  => WP_REST_Server::READABLE,
//			'callback' => [ $this, 'get_photos' ],
//		] );

//	public function get_photos( WP_REST_Request $request ): WP_Error|WP_REST_Response {
//
//	}