<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package synthesis2021
 */

?>

<?php 
   echo '<figure class="post-hero">';
   if ( has_post_thumbnail() ) {
     the_post_thumbnail( 'hero' );
   } else {
    echo '<img src="https://via.placeholder.com/1280x900.png?text=This+post+is+missing+a+featured+image" />';
   }
   echo '</figure>';
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
	
		<?php 
      the_title( '<h2 class="entry-title">', '</h2>' );
      if ( 'post' === get_post_type() ) :
    ?>
      <div class="entry-meta">
        <?php
          synthesiscapital_posted_on();
          synthesiscapital_posted_by();
          the_tags( '', ', ', '' )
        ?>
      </div><!-- .entry-meta -->
    <?php endif ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php
      the_content();

		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'synthesiscapital' ),
				'after'  => '</div>',
			)
		);
		?>
	</div><!-- .entry-content -->
  <footer class="entry-footer">
    <div class="wp-block-buttons">
      <div class="wp-block-button">
        <a class="wp-block-button__link" href="/insights">Our insights</a>
      </div>
    </div>
    <div class="entry-meta">
      <?php
        synthesiscapital_posted_on();
        synthesiscapital_posted_by();
        the_tags( '', ', ', '' )
      ?>
    <div class="social-share">
      <a target="_blank" href="https://twitter.com/intent/tweet?text=<?php the_title(); echo ': '; esc_url(the_permalink()); ?>">Share on Twitter ↘</a>
      <a target="_blank" href="https://www.linkedin.com/sharing/share-offsite/?url=<?php esc_url(the_permalink()); ?>">Share on LinkedIn ↘</a>
    </div>
    </div><!-- .entry-meta -->
  </footer>
</article><!-- #post-<?php the_ID(); ?> -->
