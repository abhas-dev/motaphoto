<?php get_template_part('template-parts/contact-modal'); ?>
<?php //get_template_part('template-parts/lightbox'); ?>
</main>

<footer id="footer">
	<div class="container">
		<?php
		wp_nav_menu([
			'theme_location' => 'footerMenuLocation',
			'container' => 'ul',
		]);
		?>
	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>