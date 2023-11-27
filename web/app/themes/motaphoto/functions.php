<?php

function motaphoto_enqueue_styles() {
	wp_enqueue_style('motaphoto-style', get_theme_file_uri('/public/css/main.css'));
}

add_action('wp_enqueue_scripts', 'motaphoto_enqueue_styles');