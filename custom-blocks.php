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

defined('ABSPATH') || exit;

function gfblock_enqueue_block_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'gfblock-block', // Handle.
		plugin_dir_url( __FILE__ ) . 'block/block.js', // File.
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ), // Dependencies.
		filemtime( plugin_dir_path( __FILE__ ) . 'block/block.js' ) // filemtime ‰ЫУ Gets file modification time.
	);

	// Styles.
	wp_enqueue_style(
		'gfblock-block-editor', // Handle.
		plugin_dir_url( __FILE__ ) . 'assets/css/editor.css', // File.
		array( 'wp-edit-blocks' ), // Dependency.
		filemtime( plugin_dir_path( __FILE__ ) . 'assets/css/editor.css' ) // filemtime ‰ЫУ Gets file modification time.
	);
}
add_action( 'enqueue_block_editor_assets', 'gfblock_enqueue_block_editor_assets' );

/**
 * Enqueue the block's assets for the frontend.
 * @since 1.0.0
 */
function gfblock_enqueue_block_assets() {
	wp_enqueue_style(
		'gfblock-frontend', // Handle.
		plugin_dir_url( __FILE__ ) . 'assets/css/style.css', // File.
		array( 'wp-blocks' ), // Dependency.
		filemtime( plugin_dir_path( __FILE__ ) . 'assets/css/style.css' ) // filemtime ‰ЫУ Gets file modification time.
	);
}
add_action( 'enqueue_block_assets', 'gfblock_enqueue_block_assets' );

?>