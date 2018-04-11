( function() {
    var __ = wp.i18n.__;
    var createElement = wp.element.createElement;
    var registerBlockType = wp.blocks.registerBlockType;
	
    registerBlockType( 'custom-blocks/teaser-block', {
        title: __( 'Teaser Block' ),
        icon: 'lock',
        category: 'common',

        edit: function( props ) {
            return createElement(
                'p', { className: props.className }, 'Editor.' // Block content
            );
        },
        
        save: function( props ) {
            return createElement(
                'p', { className: props.className }, 'Front End.' // Block content
            );
        },
    });
})();