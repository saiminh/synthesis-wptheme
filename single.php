<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package synthesis2021
 */

get_header();
?>

	<main id="primary" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', get_post_type() );

			// the_post_navigation(
			// 	array(
			// 		'prev_text' => '<span class="nav-subtitle">' . esc_html__( 'Previous:', 'synthesiscapital' ) . '</span> <span class="nav-title">%title</span>',
			// 		'next_text' => '<span class="nav-subtitle">' . esc_html__( 'Next:', 'synthesiscapital' ) . '</span> <span class="nav-title">%title</span>',
			// 	)
			// );
      ?>
      <div class="post-nav">
      <?php
      $next_post = get_next_post();
      if (!empty( $next_post )): ?>
          <a href="<?php echo esc_url( get_permalink( $next_post->ID ) ); ?>">
              <?php echo get_the_post_thumbnail( $next_post->ID, 'thumbnail' ); ?>
              <?php echo 'Next Insight'; ?>
          </a>
      <?php endif; 
		endwhile; // End of the loop.
		?>
      <a class="wp-block-button__link" href="<?php echo home_url(); ?>">Back to insights</a>
      </div>
	</main><!-- #main -->

<?php
// get_sidebar();
get_footer();
