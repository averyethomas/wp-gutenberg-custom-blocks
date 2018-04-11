( function( blocks, i18n, element ) {
    
    /* Set up variables */
    
    var el = element.createElement;
    var children = blocks.source.children;
    var BlockControls = wp.blocks.BlockControls;
    var AlignmentToolbar = wp.blocks.AlignmentToolbar;
    var MediaUpload = wp.blocks.MediaUpload;
    var InspectorControls = wp.blocks.InspectorControls;
    var TextControl = wp.blocks.InspectorControls.TextControl;
    var SelectControl = wp.blocks.InspectorControls.SelectControl;
    
    /* Register block type */
    
    blocks.registerBlockType('gfblocks/feature-block', {
        title: i18n.__( 'Feature' ), // The title of our block.
        icon: 'info', // Dashicon icon for our block
        category: 'common', // The category of the block.
        attributes: {}, /* Placeholder */
        edit: {}, /* Placeholder */
        save: {} /* Placeholder */
    }
  
} )(
   window.wp.blocks,
   window.wp.i18n,
   window.wp.element,
);