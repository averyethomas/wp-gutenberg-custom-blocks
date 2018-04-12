( function() {
    var __                  = wp.i18n.__;
    var el                  = wp.element.createElement;
    var registerBlockType   = wp.blocks.registerBlockType;
    var RichText            = wp.blocks.RichText;
	
    registerBlockType( 'custom-blocks/teaser-block', {
        title: __( 'Teaser Block' ),
        icon: 'unlock',
        category: 'common',
        
        attributes: {
            title: {
		type: 'array',
		source: 'children',
		selector: 'h3',
	    },
            content: {
                type: 'array',
                source: 'children',
                selector: 'p',
            }
        },

        edit: function( props ) {
	    var attributes = props.attributes;
            var focusedEditable = props.focus ? props.focus.editable || 'title' : null;
            
            return (
                el( 'div', { className: 'teaser'},
                    el( 'div', { className: 'container'},
                        el( 'div', { className: 'title'},
                            el( 'div', { className: 'bar left'} ),
                            el(
                                RichText, {
                                    tagName: 'h3',
                                    inline: true,
                                    placeholder: __( 'Write title ...' ),
                                    value: attributes.title,
                                    onChange: function(input) {
                                        props.setAttributes({ title: input });
                                    },
                                    focus: focusedEditable === 'title' ? focus : null,
                                    onFocus: function( focus ) {
					props.setFocus( _.extend( {}, focus, { editable: 'title' } ) );
				    },
                                }
                            ),
                            el( 'div', { className: 'bar right'} )
                        ),
                        el( 'div', { className: 'content'},
                            el( 
                                RichText, {
                                    tagName: 'p',
                                    inline: true,
                                    placeholder: __( 'Write content ...' ),
                                    value: attributes.content,
                                    onChange: function(input) {
                                        props.setAttributes({ content: input });
                                    },
                                    focus: focusedEditable === 'content' ? focus : null,
                                    onFocus: function( focus ) {
					props.setFocus( _.extend( {}, focus, { editable: 'title' } ) );
				    },
                                }   
                            )
                        )
                    )
                )
            );
        },
        
        save: function( props ) {
            var attributes = props.attributes;
            
            return (
                el( 'div', { className: 'teaser'},
                    el( 'div', { className: 'container'},
                        el( 'div', { className: 'title'},
                            el( 'div', { className: 'bar left'} ),
                            el( 'h3', {}, attributes.title ),
                            el( 'div', { className: 'bar right'} )
                        ),
                        el( 'div', { className: 'content'},
                            el( 'p', {}, attributes.content )
                        )
                    )
                ) 
            );
        },
    });
})();