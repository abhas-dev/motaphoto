<!doctype html>
<html <?php language_attributes();  ?>>
<head>
    <?php wp_head(); ?>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport"
	      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body <?php body_class(); ?>>
	<header>
		<div class="container">
			<div class="header__logo">
                <?php $logoId = get_theme_mod('custom_logo'); ?>
				<a href="<?= home_url() ?>">
					<img src="<?php echo get_theme_file_uri('public/images/logo.png'); ?>" alt="logo">
<!--					<img src="--><?php //= wp_get_attachment_image_src($logoId, 'medium')[0]; ?><!--" alt="logo">-->
				</a>
			</div>
			<nav class="header__navigation">
                <?php
                    wp_nav_menu([
	                    'theme_location' => 'headerMenuLocation',
                        'container' => 'ul',
                    ]);
                ?>
<!--				<ul>-->
<!--					<li><a href="--><?php //= site_url() ?><!--">accueil</a></li>-->
<!--					<li><a href="--><?php //= site_url('/about-us') ?><!--">à propos</a></li>-->
<!--					<li class="contact-btn"><a href="#">contact</a></li>-->
<!--				</ul>-->
			</nav>
		</div>
	</header>

	<main>