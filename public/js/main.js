requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        'jquery': 'jquery-1.10.2.min',
        'jquery-ui': 'jquery-ui-1.10.3.custom.min',
        'backbone_files': '../backbone'
    },
    //Remember: only use shim config for non-AMD scripts,
    //scripts that do not already call define(). The shim
    //config will not work correctly if used on AMD scripts,
    //in particular, the exports and init config will not
    //be triggered, and the deps config will be confusing
    //for those cases.
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery', 'json2'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        "jquery-ui": ["jquery"]
    }
});
requirejs(['backbone_files/routers/router'],
    function (Router) {
        // console.log(jQuery);
        // console.log(Backbone);
        jQuery(function () {
            // new Router();
            // var app = new Router();
            app = new Router();
            Backbone.history.start();
            // Backbone.history.start({pushState: true});
        });
    });
