<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package synthesis2021
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="The Future Food Investors. We invest in game-changing founders, whose companies are transforming the food system through the synthesis of food technology and modern biotechnology." >
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>
  <div class="page-reveal" style="position: fixed; top: 0; right: 0; bottom: -100vh; left: 0; background: linear-gradient(to bottom, #FFF 0%, #FFF 50%, #FFF0 100%); z-index: 2;"></div>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'synthesiscapital' ); ?></a>

	<header id="masthead" class="site-header">
		<a class="site-branding logo" href="<?php echo get_home_url(); ?>" >
			<?php get_template_part( 'inc/inline', 'logo.svg'); ?>
		</a><!-- .site-branding -->

		<nav id="site-navigation" class="main-navigation">
			<a class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Menu', 'synthesiscapital' ); ?></a>
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
				)
			);
			?>
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
