<?php
echo "<div class='two-columns-grid photo-grid'>";
$photos = $args['photos'];
if ($photos->have_posts()){
    while ($photos->have_posts()){
        $photos->the_post();
        $imageObject =  get_field('photo_image');

        get_template_part('template-parts/photo-card', null, [
            'imageUrl' => $imageObject['url'],
			'imageAlt' => $imageObject['alt'],
            'title' => get_the_title(),
            'category' => get_the_terms(get_post(), 'photo_category')[0]->name,
            'format' => get_the_terms(get_post(), 'photo_format')[0]->name,
        ]);
    }
	wp_reset_postdata();
}
echo "</div>";