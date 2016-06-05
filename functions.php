<?php

// Adding button for bold list
add_action( 'init', 'custom_buttons' );
function custom_buttons() {
    add_filter( "mce_external_plugins", "custom_add_buttons" );
    add_filter( 'mce_buttons', 'custom_register_buttons' );
}
function custom_add_buttons( $plugin_array ) {
    $plugin_array['custom'] = get_template_directory_uri() . '/assets/js/custom-tinymce-plugin.js';
    return $plugin_array;
}
function custom_register_buttons( $buttons ) {
    array_push( $buttons, 'boldlist');
    return $buttons;
}