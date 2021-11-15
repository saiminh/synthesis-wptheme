<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package synthesis2021
 */

get_header();
?>

	<main id="primary" class="site-main">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<?php
				the_archive_title( '<h1 class="page-title">', '</h1>' );
				the_archive_description( '<div class="archive-description">', '</div>' );
				?>
			</header><!-- .page-header -->
      <div class="blog-tags">
        <span class="blog-tags-title">Tags:</span> 
        <a class="blog-tags-tag" href="/insights">All</a>
        <?php 
          $tags = get_tags(); 
          if ( $tags ) :
            foreach ( $tags as $tag ) : ?>
              <a class="blog-tags-tag <?php
                $termurl = esc_url( get_tag_link( $tag->term_id ) );
                $requrl = $_SERVER['REQUEST_URI'];
                if ( strpos($termurl,$requrl) !== false ) { 
                  echo 'active-tag'; 
                }?>" href="<?php echo esc_url( get_tag_link( $tag->term_id ) ); ?>" title="<?php echo esc_attr( $tag->name ); ?>">
                <?php echo esc_html( $tag->name ); ?>
              </a>
            <?php endforeach; ?>
          <?php endif; ?>
      </div>
      <div class="articles">
			<?php
			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
				get_template_part( 'template-parts/content', 'preview' );

			endwhile;

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>
      </div>
    <?php the_posts_navigation(); ?>
	</main><!-- #main -->

<?php
// get_sidebar();
get_footer();
