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
            <div class="header__nolose">
                <div class="header__logo">
                    <?php $logoId = get_theme_mod('custom_logo'); ?>
                    <a href="<?= home_url() ?>">
                        <img src="<?= get_theme_file_uri('public/images/logo.png'); ?>" alt="logo">
                        <!--                    <img src="--><?php //= wp_get_attachment_image_src($logoId, 'medium')[0]; ?><!--" alt="logo">-->
                    </a>
                </div>

                <div id="toggler" class="header__burger">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="header__close">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>

            <nav class="header__navigation">
                <?php
                wp_nav_menu([
                    'theme_location' => 'headerMenuLocation',
                    'container' => 'ul',
                ]);
                ?>
            </nav>

        </div>
    </header>

    <main>
