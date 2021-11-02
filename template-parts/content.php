<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package synthesis2021
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php
      if ( 'post' === get_post_type() ) :
    ?>
			<div class="entry-meta">
				<?php
          synthesiscapital_posted_on();
          synthesiscapital_posted_by();
          the_tags( '', ', ', '' )
        ?>
			</div><!-- .entry-meta -->
		<?php 
      endif; 
      the_title( '<h2 class="entry-title">', '</h2>' );
    ?>
	</header><!-- .entry-header -->

	<?php if ( !is_singular() ) { synthesiscapital_post_thumbnail(); } ?>

	<div class="entry-content">
		<?php
		the_excerpt(
			sprintf(
				wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers */
					__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'synthesiscapital' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				wp_kses_post( get_the_title() )
			)
		);

		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'synthesiscapital' ),
				'after'  => '</div>',
			)
		);
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<?php synthesiscapital_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->
