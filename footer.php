<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package synthesis2021
 */

?>
  <footer id="colophon" class="site-footer">
    <div class="wp-block-group synthesis-newsletter-subscribe">
      <p class="has-text-align-center">Receive the latest Synthesis insights by email.</p>
      <form action="">
        <input type="email" placeholder="Enter your email address">
        <div class="wp-block-buttons">
          <div class="wp-block-button"><a class="wp-block-button__link">Submit</a></div>
        </div>
      </form>
    </div>
    <div class="site-footer-colophon">
      <div class="footer-address">
        5 Merchant Square<br />
        London, UK<br />
        W2 1AY
      </div>
      <div class="footer-links">
        <a href="mailto:contact@synthesis.capital">Contact</a>
        <a href="https://www.linkedin.com/company/synthesiscapital/">Linkedin</a>
        <a href="https://twitter.com/Synthesis_Cap">Twitter</a>
      </div>
      <div class="footer-copyright">
        Synthesis Capital © 2021<br />
        <?php the_privacy_policy_link(); ?>
      </div>
      <div class="footer-disclaimer">
	We use all imagery with the kind permission from the following: Beyond Meat, Impossible Foods, UPSIDE Foods, Perfect Day, Geltor, Redefine Meat, Formo, Enough Foods, Aleph Farms, Solar Foods, Blue Nalu, and Gathered Foods.</div>
    </div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
