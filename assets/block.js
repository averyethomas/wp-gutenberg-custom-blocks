( function() {
    var __                  = wp.i18n.__;
    var createElement       = wp.element.createElement;
    var registerBlockType   = wp.blocks.registerBlockType;
    var RichText            = wp.blocks.RichText;
	
    registerBlockType( 'custom-blocks/teaser-block', {
        title: __( 'Teaser Block' ),
        icon: 'unlock',
        category: 'common',
        
        attributes: {
            content: {
                type: 'array',
                source: 'children',
                selector: 'p',
                ///default: 'Editable block content ...',
            }
        },

        edit: function( props ) {
            var content = props.attributes.content;
            var focus = props.focus;
            
            return createElement(
                RichText, {
                    tagName: 'p',
                    className: props.className,
                    value: content,
                    onChange: function(input) {
                        props.setAttributes({ content: input });
                    },
                    focus: focus,
                    onFocs: props.setFocus
                }
            );
        },
        
        save: function( props ) {
            var content = props.attributes.content;
            
            return createElement(
                'p', { className: props.className }, content
            );
        },
    });
})();