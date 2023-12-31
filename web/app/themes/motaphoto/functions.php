<?php

require_once get_theme_file_path('/includes/rest-auth.php');
//require get_theme_file_path('/includes/photo-route.php');
require_once get_theme_file_path('/includes/PhotoCustomRoute.php');
$photoCustomRoute = new PhotoCustomRoute();
require_once get_theme_file_path('/includes/adjacentPostMod.php');

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

function motaphoto_enqueue_styles():void {
	// Stylesheets
//	wp_enqueue_style('light-gallery', get_theme_file_uri('./node_modules/lightgallery/css/lightgallery-bundle.min.css'));
	wp_enqueue_style('light-gallery', get_theme_file_uri('./node_modules/@fancyapps/ui/dist/fancybox/fancybox.css'));
	wp_enqueue_style('motaphoto-style', get_theme_file_uri('./public/css/main.css'));
	// Scripts
	wp_enqueue_script('motaphoto-scripts', get_theme_file_uri('/public/build/index.js'), NULL, '1.0', $args = ['strategy' => 'defer', 'in_footer' => true]);

	wp_localize_script('motaphoto-scripts', 'motaphotoData', [
		'root_url' => home_url(),
		'nonce' => wp_create_nonce('wp_rest'),
		'site_name' => get_bloginfo('name'),
	]);
}

// Add menus
function register_menus():void {
	$locations = [
		'headerMenuLocation' => 'Menu principal',
		'footerMenuLocation' => 'Menu footer',
	];

	register_nav_menus($locations);
}

function motaphoto_features():void  {
	add_theme_support('title-tag');
}

function add_class_to_menu_link( $atts, $item, $args ) {
//	if ( $item->url == home_url().'/contact' ) {
	if ( $item->title == 'Contact' ) {
		$atts['class'] = 'contact';
	}
	return $atts;
}

function add_text_to_footer_menu ($items, $args) {
	if ($args->theme_location == 'footerMenuLocation') {
		$items .= '<li><span>Tous droits réservés</span></li>';
	}
	return $items;
}

// Add actions
add_action('after_setup_theme', 'register_menus');
add_action('after_setup_theme', 'motaphoto_features');
add_action('wp_enqueue_scripts', 'motaphoto_enqueue_styles');
add_action('init', 'add_photo_categories');
add_action('init', 'add_photo_formats');
add_action('init', 'photo_post_types');

// Add filters
add_filter( 'nav_menu_link_attributes', 'add_class_to_menu_link', 10, 3 );
add_filter('wp_nav_menu_items', 'add_text_to_footer_menu', 10, 2);