{
    "baseUrl": "./lib",
    "paths": {
        "jquery": "jquery-1.10.2.min",
        "jquery-ui": "jquery-ui-1.10.3.custom.min",
        "backbone_files": "../backbone",
        "main": "../main"
    },
    "shim": {
        "backbone": {
            //These script dependencies should be loaded before loading
            //backbone.js
            "deps": ["underscore", "jquery", "json2"],
            //Once loaded, use the global "Backbone" as the
            //module value.
            "exports": "Backbone"
        },
        "jquery-ui": ["jquery"]
    },
    "name": "main",
    "out": "main-built.js"
}
