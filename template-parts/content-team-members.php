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
    <div class="wp-block-buttons">
      <div class="wp-block-button"><a class="wp-block-button__link" href="/team">Our Team</a></div>
    </div>
	</div><!-- .entry-content -->
  <script>
    function hank() {
      let parent = document.querySelector('.entry-content');
      let featuredimg = document.querySelector('.team-member-photo').outerHTML;
      let name = document.querySelector('.team-member-name').outerHTML;
      let quote = document.querySelector('.team-teammember-quote').outerHTML;
      let title = document.querySelector('.team-teammember-title').outerHTML;
      document.querySelector('.team-member-photo').remove();
      document.querySelector('.team-member-name').remove();
      document.querySelector('.team-teammember-quote').remove();
      document.querySelector('.team-teammember-title').remove();
      let parentcontent = parent.innerHTML;
      let newparentcontent =  featuredimg + name  + title + quote + parentcontent;
      parent.innerHTML = newparentcontent;
    }
    hank();
  </script>
</article><!-- #post-<?php the_ID(); ?> -->
