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

add_action('wp_enqueue_scripts', 'motaphoto_enqueue_styles');

function motaphoto_features():void  {
	add_theme_support('title-tag');
}

add_action('after_setup_theme', 'motaphoto_features');