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
  
	<div class="entry-content">
    <?php 
      echo '<figure class="team-member-photo">';
      if ( has_post_thumbnail() ) {
        the_post_thumbnail( 'large' );
      } else {
      echo '<img src="https://via.placeholder.com/1280x900.png?text=This+post+is+missing+a+featured+image" />';
      }
      echo '</figure>';
      
      the_title( '<h2 class="team-member-name">', '</h2>' );
      
      the_content();
		?>
    <p><a class="team-member-backlink" href="/insights">Back to Team ↘</a></p>
	</div><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->
