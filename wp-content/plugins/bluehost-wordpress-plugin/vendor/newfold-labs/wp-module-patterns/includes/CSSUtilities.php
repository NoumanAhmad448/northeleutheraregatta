<?php

namespace NewfoldLabs\WP\Module\Patterns;

class CSSUtilities {

	/**
	 * Constructor.
	 */
	public function __construct() {
		\add_action( 'enqueue_block_assets', array( $this, 'enqueue' ) );
		\add_action( 'enqueue_nfd_wonder_blocks_utilities', array( $this, 'enqueue' ) );
	}

	/**
	 * Enqueue assets used on front-end and back-end.
	 *
	 * @return void
	 */
	public function enqueue() {

		\wp_register_style( 
			'nfd-wonder-blocks-utilities',
			NFD_WONDER_BLOCKS_URL . '/assets/build/utilities.css',
			array(),
			NFD_WONDER_BLOCKS_VERSION
		);
        
        \wp_register_script(
            'nfd-wonder-blocks-utilities',
            NFD_WONDER_BLOCKS_URL . '/assets/build/utilities.js',
            array(),
            NFD_WONDER_BLOCKS_VERSION
        );

		\wp_enqueue_style( 'nfd-wonder-blocks-utilities' );
		\wp_enqueue_script( 'nfd-wonder-blocks-utilities' );
		
		\wp_add_inline_style( 'nfd-wonder-blocks-utilities', $this->get_inline_css() );
	}
	
	private function get_inline_css() {
		
		$theme = \wp_get_theme()->get_template();
		$css   = '';
        
		if ( 'yith-wonder' === $theme ) {
			$css = "body, .editor-styles-wrapper {
                /* Colors */
                --wndb--color--primary: var(--wp--preset--color--primary);
                --wndb--color--secondary: var(--wp--preset--color--secondary);
				--wndb--color--body: var(--wp--preset--color--base);
                
				--wndb--p: var(--wp--preset--spacing--40);
                
                --wndb--text--sm: var(--wp--preset--font-size--x-small);
				--wndb--text--md: var(--wp--preset--font-size--normal);

                
				--nfd-cp-text-sm: var(--wp--preset--font-size--x-small, 0.875rem);
                --nfd-cp-text-lg: var(--wp--preset--font-size--medium, 1.625rem);
                --nfd-cp-text-huge: var(--wp--preset--font-size--huge, 2.25rem);
                
                --nfd-cp-bg-accent: var(--wp--preset--color--primary, #000);
                --nfd-cp-border-accent: var(--wp--preset--color--primary, #000);
				--nfd-cp-text-primary: var(--wp--preset--color--primary, #000);
                --nfd-cp-text-secondary: var(--wp--preset--color--secondary, #000);
			}";
		}

		if ( 'twentytwentytwo' === $theme ) {
			$css = "body, .editor-styles-wrapper {
				--nfd-cp-p-base: var(--wp--custom--spacing--outer, 0px);
                --nfd-cp-bg-accent: var(--wp--preset--color--primary, #000);
                --nfd-cp-border-accent: var(--wp--preset--color--primary, #000);
				--nfd-cp-text-primary: var(--wp--preset--color--primary, #000);
                --nfd-cp-text-secondary: var(--wp--preset--color--secondary, #000);
			}";
            
            $css = "body .is-layout-constrained:has(.wndb-container.is-layout-constrained) > .wndb-container.is-layout-constrained {
                width: 100%;
                max-width: unset;
            }";
		}
        
        if ( 'twentytwentythree' === $theme ) {
            $css = "body, .editor-styles-wrapper {
				--nfd-cp-p-base: var(--wp--style--root--padding-left);
                --nfd-cp-bg-accent: var(--wp--preset--color--secondary, #000);
                --nfd-cp-border-accent: var(--wp--preset--color--primary, #000);
                --nfd-cp-text-primary: var(--wp--preset--color--secondary, #000);
                --nfd-cp-text-secondary: var(--wp--preset--color--primary, #000);
				
            }";
        }
		
		return $css;
	}
}
