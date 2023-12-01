<?php

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

function motaphoto_enqueue_styles():void {
	// Stylesheets
	wp_enqueue_style('motaphoto-style', get_theme_file_uri('/public/css/main.css'));
	// Scripts
	wp_enqueue_script('motaphoto-scripts', get_theme_file_uri('/public/build/index.js'), NULL, '1.0', $args = ['strategy' => 'defer', 'in_footer' => true]);
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
		$atts['class'] = 'contact-btn';
	}
	return $atts;
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