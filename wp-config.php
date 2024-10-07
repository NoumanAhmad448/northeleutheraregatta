<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'thesunr8_WPBNV');

/** Database username */
define('DB_USER', 'thesunr8_WPBNV');

/** Database password */
define('DB_PASSWORD', 'JCg&=Bc!_/qv(1:Y9');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '78aeb0f9008d881d9b8d02bd9137c3e463799fefb0270fad36a65b157f8317c8');
define('SECURE_AUTH_KEY', 'ffbabf4dfc2a21fc72a51bbd73c5ac32ca0037ac1ccc937d3ff5e29f2448d9b4');
define('LOGGED_IN_KEY', '7e63a408e50620eed8159b314b9fa8d2ac2ad6e8e7f18f2c899a77d18cbe086b');
define('NONCE_KEY', '1e4d9f586f9f5bb47c0b0c23df857099ebe047686fa543ce9000adcdef5d771d');
define('AUTH_SALT', '54ee04b0a1dd1193ea77bffa84e9c25e97aef643db5f96dfc39f9c65c200d7e7');
define('SECURE_AUTH_SALT', 'f4da949f3a4d8b8492b3b215041d821e53caad580fc0aecc709580f049b16cab');
define('LOGGED_IN_SALT', 'ca330b13134a92d1f830a630d85100ab11b0c121c57facfcb52d19cb665fcba4');
define('NONCE_SALT', '8a6312a3366c10b63a1ad6803acedba51962769a63622697bb8d6a63a5f3aa36');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'EUS_';
define('WP_CRON_LOCK_TIMEOUT', 120);
define('AUTOSAVE_INTERVAL', 300);
define('WP_POST_REVISIONS', 20);
define('EMPTY_TRASH_DAYS', 7);
define('WP_AUTO_UPDATE_CORE', true);

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
