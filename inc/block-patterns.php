<?php
/**
 * Block Patterns
 *
 * @link https://developer.wordpress.org/reference/functions/register_block_pattern/
 * @link https://developer.wordpress.org/reference/functions/register_block_pattern_category/
 *
 * @package synthesis2021
 * 
 */

/**
 * Register Block Pattern Category.
 */
if ( function_exists( 'register_block_pattern_category' ) ) {

  register_block_pattern_category(
    'synthesis2021',
    array( 'label' => esc_html__( 'Synthesis', 'synthesis2021' ) )
  );
}

/**
 * Register Block Patterns.
 */
if ( function_exists( 'register_block_pattern' ) ) {

  //Scroll-Section
  register_block_pattern(
    'synthesis2021/scroll-section',
    array(
      'title'         => esc_html__( 'Scroll-Section', 'synthesis2021' ),
      'categories'    => array( 'synthesis2021' ),
      'viewportWidth' => 1440,
      'content'       => '
        <!-- wp:group {"tagName":"section","className":"scroll-section"} -->
        <section class="wp-block-group scroll-section"></section>
        <!-- /wp:group -->'
    )
  );

  //Label
  register_block_pattern(
    'synthesis2021/label',
    array(
      'title'         => esc_html( 'Label', 'synthesis2021' ),
      'categories'    => array( 'synthesis2021' ),
      'viewportWidth' => 1440,
      'content'       => '
        <!-- wp:paragraph {"className":"label"} -->
        <p class="label">Labelname <br><span class="arrowdown">↙</span></p>
        <!-- /wp:paragraph -->
      '
    )
    );
    
    //Investments-Logo
    register_block_pattern(
      'synthesis2021/investment-logo',
      array(
        'title'         => esc_html( 'Investment Logo', 'synthesis2021' ),
        'categories'    => array( 'synthesis2021' ),
        'viewportWidth' => 1440,
        'content'       => '
          <!-- wp:image {"id":42,"sizeSlug":"large","linkDestination":"none","className":"investment-logo"} -->
          <figure class="wp-block-image size-large investment-logo"><img alt=""/></figure>
          <!-- /wp:image -->
        '
      )
    );
    
    //Image fullw on 
    register_block_pattern(
      'synthesis2021/img-mob_full-tab_por_33_right',
      array(
        'title'         => esc_html( 'Image on right ', 'synthesis2021' ),
        'description'         => esc_html( 'This image is full width on mobile and becomes a right aligned 33% wide image on tablets and bigger', 'synthesis2021' ),
        'categories'    => array( 'synthesis2021' ),
        'viewportWidth' => 300,
        'content'       => '
          <!-- wp:image {"className":"img-mob_full-tab_por_33_right"} -->
          <figure class="wp-block-image img-mob_full-tab_por_33_right"><img alt=""/></figure>
          <!-- /wp:image -->
        '
      )
    );
    
    //Food Technology 
    register_block_pattern(
      'synthesis2021/food-technology',
      array(
        'title'         => esc_html( 'Food Technology', 'synthesis2021' ),
        'description'         => esc_html( 'Block with food technology image and icons displayed on the focus page', 'synthesis2021' ),
        'categories'    => array( 'synthesis2021' ),
        'viewportWidth' => 300,
        'content'       => '
          <!-- wp:group {"className":"food-technology"} -->
          <div class="wp-block-group food-technology"><!-- wp:image {"id":101,"sizeSlug":"full","linkDestination":"none","className":"food-technology-image"} -->
          <figure class="wp-block-image size-full food-technology-image"><img src="" alt=""/></figure>
          <!-- /wp:image -->

          <!-- wp:separator {"className":"food-technology-separator"} -->
          <hr class="wp-block-separator food-technology-separator"/>
          <!-- /wp:separator -->

          <!-- wp:paragraph {"className":"food-technology-title"} -->
          <p class="food-technology-title">Precision Fermented<br>Dairy</p>
          <!-- /wp:paragraph -->

          <!-- wp:group {"className":"food-technology-icons"} -->
          <div class="wp-block-group food-technology-icons"><!-- wp:image {"id":90,"sizeSlug":"large","linkDestination":"none"} -->
          <figure class="wp-block-image size-large"><img src="" alt=""/></figure>
          <!-- /wp:image -->

          <!-- wp:image {"id":89,"sizeSlug":"large","linkDestination":"none"} -->
          <figure class="wp-block-image size-large"><img src="" alt=""/></figure>
          <!-- /wp:image --></div>
          <!-- /wp:group --></div>
          <!-- /wp:group -->
        '
      )
    );

    //Investment Portfolio 
    register_block_pattern(
      'synthesis2021/investment-portfolio',
      array(
        'title'         => esc_html( 'Investment Portfolio Piece', 'synthesis2021' ),
        'description'         => esc_html( 'Block for one investment portfolio piece', 'synthesis2021' ),
        'categories'    => array( 'synthesis2021' ),
        'viewportWidth' => 300,
        'content'       => '
        <!-- wp:group {"className":"investment-portfolio-piece"} -->
        <div class="wp-block-group investment-portfolio-piece"><!-- wp:group {"className":"investment-portfolio-piece-image"} -->
        <div class="wp-block-group investment-portfolio-piece-image"><!-- wp:image {"id":322,"sizeSlug":"large","linkDestination":"none"} -->
        <figure class="wp-block-image size-large"><img src="" alt=""/></figure>
        <!-- /wp:image --></div>
        <!-- /wp:group -->

        <!-- wp:group {"className":"investment-portfolio-piece-logo"} -->
        <div class="wp-block-group investment-portfolio-piece-logo"><!-- wp:image {"id":42,"sizeSlug":"large","linkDestination":"none"} -->
        <figure class="wp-block-image size-large"><img src="" alt="" /></figure>
        <!-- /wp:image --></div>
        <!-- /wp:group -->

        <!-- wp:group {"className":"investment-portfolio-piece-description"} -->
        <div class="wp-block-group investment-portfolio-piece-description"><!-- wp:paragraph -->
        <p>Formo is a food biotech company on a mission to bring the next generation of sustainable, healthy, and equitable dairy products to consumers.</p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph -->
        <p>Formo, formerly known as LegenDairy Foods, is Europe\'s first cellular agriculture company developing cultivated dairy products - that is dairy which is based on real, animal-free milk proteins produced using precision fermentation.</p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:group -->

        <!-- wp:group {"className":"investment-portfolio-piece-factsheet"} -->
        <div class="wp-block-group investment-portfolio-piece-factsheet"><!-- wp:paragraph -->
        <p>2021<br>Precision Fermentation<br>Berlin</p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph -->
        <p>Formo.bio</p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:group -->

        <!-- wp:group {"className":"investment-portfolio-piece-tech-icons"} -->
        <div class="wp-block-group investment-portfolio-piece-tech-icons"><!-- wp:html -->
        <lottie-player autoplay="" loop="" mode="normal" src="../wp-content/themes/synthesiscapital/assets/lottie/Plant-based-white.json" style="width: 45px">
        </lottie-player>
        <!-- /wp:html -->

        <!-- wp:html -->
        <lottie-player autoplay="" loop="" mode="normal" src="../wp-content/themes/synthesiscapital/assets/lottie/Cultivated-white.json" style="width: 45px">
        </lottie-player>
        <!-- /wp:html -->
        
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        '
      )
    );
}


