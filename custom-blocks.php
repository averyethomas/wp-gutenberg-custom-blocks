<?php
/**
 * Plugin Name: Gutenberg Custom Blcoks
 * Description: Testing of Gutenberg Custom Blocks
 * Author: Avery Thomas
 * Author URI: https://averyethomas.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * @package Gutenberg_Feature_Block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue the block's assets for the editor.
 *
 * wp-blocks:  The registerBlockType() function to register blocks.
 * wp-element: The wp.element.createElement() function to create elements.
 * wp-i18n:    The __() function for internationalization.
 *
 * @since 1.0.0
 */
function custom_block_enqueue() {
	wp_enqueue_script(
		'teaser-block-script', // Unique handle.
		plugins_url( '/assets/block.js', __FILE__ ), // block.js: We register the block here.
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ), // Dependencies, defined above.
		filemtime( plugin_dir_path( __FILE__ ) . '/assets/block.js' ) // filemtime Ñ Gets file modification time.
	);
	wp_enqueue_style(
		'teaser-block-style-editor', // Handle.
		plugins_url( '/assets/style.css', __FILE__ ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __FILE__ ) . '/assets/style.css' ) // filemtime Ñ Gets file modification time.
	);
}
add_action( 'enqueue_block_editor_assets', 'custom_block_enqueue' );

?>