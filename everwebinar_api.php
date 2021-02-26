<?php
/*
Plugin Name: Everwebinar API
Description: Plugin will make Everwebinar API
Version: 7.5
Author: Muhammad Atiq
*/

// Make sure we don't expose any info if called directly
if ( !function_exists( 'add_action' ) ) {
    echo "Hi there!  I'm just a plugin, not much I can do when called directly.";
    exit;
}

define( 'EWA_PLUGIN_NAME', 'Everwebinar API' );
define( 'EWA_PLUGIN_PATH', plugin_dir_path(__FILE__) );
define( 'EWA_PLUGIN_URL', plugin_dir_url(__FILE__) );
define( 'EWA_SITE_BASE_URL',  rtrim(get_bloginfo('url'),"/")."/");
define( 'EWA_LANG_DIR', dirname( plugin_basename(__FILE__) ).'/language/' );

require_once EWA_PLUGIN_PATH.'includes/main.php';

register_activation_hook( __FILE__, array( 'EWA', 'ewa_install' ) );
register_deactivation_hook( __FILE__, array( 'EWA', 'ewa_uninstall' ) );
