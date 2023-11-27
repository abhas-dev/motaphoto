<!doctype html>
<html lang="en">
<head>
    <?php wp_head(); ?>
	<meta charset="UTF-8">
	<meta name="viewport"
	      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<script src="public/js/index.js" defer></script>
	<title>Document</title>
</head>
<body>
	<header>
		<div class="container">
			<div class="header__logo">
				<a href="index.html">
					<img src="<?php echo get_theme_file_uri('public/images/logo.png'); ?>" alt="logo">
				</a>
			</div>
			<nav class="header__navigation">
				<ul>
					<li><a href="#">accueil</a></li>
					<li><a href="#">à propos</a></li>
					<li><a href="#">contact</a></li>
				</ul>
			</nav>
		</div>
	</header>

	<main>