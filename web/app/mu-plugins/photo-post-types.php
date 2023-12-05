<?php
/**
Plugin Name: Custom Post Type Photo
Plugin URI: https://your-plugin-site.example.com
Description: A custom mu-plugin for handling custom post type photo.
Version: 0.1
Author: abhas
Author URI: azure-software.fr
 */

function add_photo_categories() {
	register_taxonomy('photo_category', 'photo', [
		'labels' => [
			'name' => 'Catégories',
			'add_new_item' => 'Ajouter une catégorie',
			'add_new' => 'Ajouter une catégorie',
			'edit_item' => 'Modifier la catégorie',
			'all_items' => 'Toutes les catégories',
			'singular_name' => 'Catégorie',
			'view_item' => 'Voir la catégorie',
			'search_items' => 'Rechercher une catégorie',
			'not_found' => 'Aucune catégorie trouvée',
			'not_found_in_trash' => 'Aucune catégorie trouvée dans la corbeille',
		],
		'public' => true,
		'show_in_rest' => true,
		'rest_base' => 'category',
		'hierarchical' => false,
		'meta_box_cb' => false,
		'show_admin_column' => true,
		'show_in_quick_edit' => true,
		'show_in_nav_menus' => true,
		'show_tagcloud' => true,
//		'rewrite' => [
//			'slug' => 'photo-category',
//			'with_front' => true,
//			'hierarchical' => true,
//			'ep_mask' => EP_NONE,
//		],
	]);
}

function add_photo_formats() {
	register_taxonomy('photo_format', 'photo', [
		'labels' => [
			'name' => 'Formats',
			'add_new_item' => 'Ajouter un format',
			'add_new' => 'Ajouter un format',
			'edit_item' => 'Modifier le format',
			'all_items' => 'Tous les formats',
			'singular_name' => 'Format',
			'view_item' => 'Voir le format',
			'search_items' => 'Rechercher un format',
			'not_found' => 'Aucun format trouvé',
			'not_found_in_trash' => 'Aucun format trouvé dans la corbeille',
		],
		'public' => true,
		'show_in_rest' => true,
		'rest_base' => 'format',
		'hierarchical' => false,
		'meta_box_cb' => false,
		'show_admin_column' => true,
		'show_in_quick_edit' => true,
		'show_in_nav_menus' => true,
		'show_tagcloud' => true
	]);
}

function photo_post_types():void {
	register_post_type('photo', [
		'public' => true,
		'show_in_rest' => true,
		'rest_base' => 'photos',
		'labels' => [
			'name' => 'Photos',
			'add_new_item' => 'Ajouter une photo',
			'add_new' => 'Ajouter une photo',
			'edit_item' => 'Modifier la photo',
			'all_items' => 'Toutes les photos',
			'singular_name' => 'Photo',
			'view_item' => 'Voir la photo',
			'search_items' => 'Rechercher une photo',
			'not_found' => 'Aucune photo trouvée',
			'not_found_in_trash' => 'Aucune photo trouvée dans la corbeille',
		],
		'supports' => [
			'title',
			'slug',
			'thumbnail'
		],
		'taxonomies' => ['photo_category', 'photo_format'],
		'menu_icon' => 'dashicons-format-image'
	]);
}

