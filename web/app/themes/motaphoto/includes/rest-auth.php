<?php
/*
 Plugin Name: Custom REST API Authentication
 Plugin URI: https://your-plugin-site.example.com
 Description: A custom mu-plugin for handling REST API authentication.
 Version: 0.1
 Author: abhas
 Author URI: azure-software.fr
*/

// Authorize GET requests for all users on photo post type
add_filter('rest_authentication_errors', function ($result) {
	global $wp;
	if (strpos($wp->query_vars['rest_route'], '/v2/photo') !== false) {
		return true;
	}

	return $result;
}, 9);

add_filter('rest_authentication_errors', function ($result) {
	global $wp;
	if (strpos($wp->query_vars['rest_route'], '/motaphoto/v1/photo') !== false) {
		return true;
	}

	return $result;
}, 9);

add_filter( 'rest_authentication_errors', function( $result ) {
	// If a previous authentication check was applied,
	// pass that result along without modification.
	if ( true === $result || is_wp_error( $result ) ) {
		return $result;
	}

	// No authentication has been performed yet.
	// Return an error if user is not logged in.
	if ( ! is_user_logged_in() ) {
		return new WP_Error(
			'rest_not_logged_in',
			__( 'You are not currently logged in.' ),
			array( 'status' => 401 )
		);
	}

	// Our custom authentication check should have no effect
	// on logged-in requests
	return $result;
});