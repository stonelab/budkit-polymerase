requirejs.config({
    "paths": {
        "jquery" : "vendor/jquery/dist/jquery.min",
        "jquery.ui" : "vendor/jquery-ui/jquery-ui.min",
        "jquery.ui.widget" : "vendor/jquery-ui/ui/widget",
        "svg4everybody":"vendor/svg4everybody/dist/svg4everybody.min",
        "wdtEmojiBundle":"vendor/wdt-emoji-bundle/wdt-emoji-bundle.min",
        "webcomponentsjs": "vendor/webcomponentsjs/webcomponents-lite.min"
    },
    shim: {
        'jquery.ui' : ['jquery']
    }
});
