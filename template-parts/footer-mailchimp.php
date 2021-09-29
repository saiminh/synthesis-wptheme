<?php
/**
 * Template part for displaying the mailchimp form
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package synthesis2021
 */

?>
<div class="wp-block-group synthesis-newsletter-subscribe">
  <p class="has-text-align-center">Receive the latest Synthesis insights by email.</p>
  <!-- Begin Mailchimp Signup Form -->
  <!-- <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css"> -->
  <div id="mc_embed_signup">
    <form action="https://capital.us5.list-manage.com/subscribe/post?u=932baccf9539a469160cbfc7f&amp;id=e85e5f5d38" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <!-- <div id="mc_embed_signup_scroll"> -->
        <!-- <h2>Subscribe</h2>
        <div class="indicates-required">
          <span class="asterisk">*</span> indicates required
        </div> -->
        <div class="mc-field-group">
          <!-- <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
          </label> -->
          <input type="email" value="" name="EMAIL" class="required email" placeholder="Enter your email address" id="mce-EMAIL">
          <div class="wp-block-buttons">
            <div class="wp-block-button">
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
            </div>
          </div>
        </div>
        <!-- <div class="mc-field-group">
          <label for="mce-FNAME">First Name </label>
          <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
        </div>
        <div class="mc-field-group">
          <label for="mce-LNAME">Last Name </label>
          <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
        </div> -->
        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_932baccf9539a469160cbfc7f_e85e5f5d38" tabindex="-1" value="">
        </div>
        
      <!-- </div> -->
  </form>
  </div>
  <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
  <!--End mc_embed_signup-->
</div>
