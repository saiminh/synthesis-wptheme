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
      // echo '<h2 class="entry-title><a href="'.the_permalink().'">'.get_the_title().'</a></h2>';
      // the_title( '<h2 class="entry-title">', '</h2>' );
    ?>
    <h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
	</header><!-- .entry-header -->

	<?php synthesiscapital_post_thumbnail(); ?>

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
      <div class="wp-block-buttons">
        <div class="wp-block-button"><a class="wp-block-button__link" href="<?php the_permalink(); ?>">Read On</a></div>
      </div>
	</div><!-- .entry-content -->

</article><!-- #post-<?php the_ID(); ?> -->
