/*global requirejs */

// Ensure any request for this webjar brings in dependencies.
requirejs.config({
    shim: {
        'ui-utils': [ 'webjars!angular-ui.js', 'webjars!jquery.js' ]
    }
});
