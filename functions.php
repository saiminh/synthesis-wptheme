<?php
/**
 * synthesis2021 functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package synthesis2021
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'synthesiscapital_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function synthesiscapital_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on synthesis2021, use a find and replace
		 * to change 'synthesiscapital' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'synthesiscapital', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'synthesiscapital' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );
	}
endif;

add_action( 'after_setup_theme', 'synthesiscapital_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function synthesiscapital_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'synthesiscapital_content_width', 640 );
}
add_action( 'after_setup_theme', 'synthesiscapital_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function synthesiscapital_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'synthesiscapital' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'synthesiscapital' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'synthesiscapital_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function synthesiscapital_scripts() {
	wp_enqueue_style( 'synthesiscapital-style', get_stylesheet_uri(), array(), _S_VERSION );
	// wp_style_add_data( 'synthesiscapital-style', 'rtl', 'replace' );
	wp_enqueue_script( 'synthesiscapital-navigation', get_template_directory_uri() . '/js/main.js', array(), _S_VERSION, true );
	// if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
	// 	wp_enqueue_script( 'comment-reply' );
	// }
}
add_action( 'wp_enqueue_scripts', 'synthesiscapital_scripts' );

/**
 * Load CSS for the editor
 */
add_action( 'after_setup_theme', 'add_gutenberg_css' );
 
function add_gutenberg_css(){
 
  add_theme_support( 'editor-styles' ); // if you don't add this line, your stylesheet won't be added
  add_editor_style( 'style-editor.min.css' ); // tries to include style-editor.css directly from your theme folder
 
}

/**
 * Get custom Block Patterns.
 */
require get_template_directory() . '/inc/block-patterns.php';

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Create custom post type 'Teammembers'
 */
function create_posttype() {
  register_post_type( 'investments-past',
  // CPT Options
    array(
      'labels' => array(
        'name' => __( 'Earlier Investments' ),
        'all_items' => __( 'See All' ),
        'singular_name' => __( 'Earlier investment' ),
      ),
      'public' => true,
      'show_ui' => true,
      'show_in_rest' => true,
      'has_archive' => 'past-investments-archive',
      'supports' => array( 'title', 'editor', 'excerpt', 'thumbnail', 'custom-fields', 'permalinks', 'featured_image' ),
    )
  );
  register_post_type( 'investment-portfolio',
  // CPT Options
    array(
      'labels' => array(
        'name' => __( 'Investment Portfolio' ),
        'all_items' => __( 'All Investments' ),
        'singular_name' => __( 'Investment' ),
      ),
      'public' => true,
      'show_ui' => true,
      'show_in_rest' => true,
      'has_archive' => 'investments-archive',
    //'rewrite' => array('slug' => 'founders/%exercisetypes%', 'with_front' => false),
    //'taxonomies' => array('businessmodel', 'founders-tag'),
      'supports' => array( 'title', 'editor', 'excerpt', 'custom-fields', 'permalinks', 'featured_image' ),
    )
  );
  flush_rewrite_rules(); 
}
// Hooking up our function to theme setup
add_action( 'init', 'create_posttype', 0 );

//Shortcode for displaying Past Investments
function display_earlier_investments() {
  echo '<div class="earlier-investments">';
      $args = array(  
        'post_type' => 'investments-past',
        'post_status' => 'publish',
        'posts_per_page' => -1, 
        //'orderby’ => 'title', 
        //'order’ => 'ASC', 
      );
      global $more;
      $loop = new WP_Query( $args ); 
            
      while ( $loop->have_posts() ) { 
        $loop->the_post();
    echo '<div class="earlier-investment">
            <div class="earlier-investment-image">'.get_the_post_thumbnail().'</div>
            <div class="earlier-investment-text">'.get_the_content('', true).'</div> 
          </div>';
          $more = 1;
      }
      wp_reset_postdata(); 
  echo '</div>';
}
function outputbuffer_earlier_investments(){
    ob_start();             // turn on output buffering
    display_earlier_investments(); // put the output to the buffer
    return ob_get_clean();  // capture and return the buffer
}
add_shortcode( 'earlier-investments', 'outputbuffer_earlier_investments' ); 

/**
 * Get Dependency Plugins for theme
 */

require_once get_template_directory() . '/class-tgm-plugin-activation.php';
add_action( 'tgmpa_register', 'synthesiscapital_register_required_plugins' );

function synthesiscapital_register_required_plugins() {
  /*
   * Array of plugin arrays. Required keys are name and slug.
   * If the source is NOT from the .org repo, then source is also required.
   */
  $plugins = array(
    array(
      'name'      => 'SVG Support',
      'slug'      => 'svg-support',
      'required'  => false,
    ),
    array(
      'name'      => 'Duplicate Page',
      'slug'      => 'duplicate-page',
      'required'  => false,
    )
  );
    $config = array(
      'id'           => 'synthesiscapital',      // Unique ID for hashing notices for multiple instances of TGMPA.
      'default_path' => '',                      // Default absolute path to bundled plugins.
      'menu'         => 'tgmpa-install-plugins', // Menu slug.
      'parent_slug'  => 'themes.php',            // Parent menu slug.
      'capability'   => 'edit_theme_options',    // Capability needed to view plugin install page, should be a capability associated with the parent menu used.
      'has_notices'  => true,                    // Show admin notices or not.
      'dismissable'  => true,                    // If false, a user cannot dismiss the nag message.
      'dismiss_msg'  => '',                      // If 'dismissable' is false, this message will be output at top of nag.
      'is_automatic' => false,                   // Automatically activate plugins after installation or not.
      'message'      => '',    
    );

    tgmpa( $plugins, $config );
  }