// Require JS Configuration
requirejs.config({
  "paths": {
    // "masonry": "vendor/masonry/masonry.pkgd.min",
    "jquery" : "vendor/jquery/dist/jquery.min",
    "jquery.ui" : "vendor/jquery-ui/jquery-ui.min",
    "jquery.ui.widget" : "vendor/jquery-ui/ui/widget",
    //"mes" : "vendor/mes/mediaelement-and-player.min",
    "autobahn" : "vendor/autobahnjs/autobahn.min",
    //"when": "vendor/when/when",
    "async" : 'vendor/requirejs-plugins/src/async',
    "dropzone" : 'vendor/dropzone/dist/dropzone-amd-module',
    "jquery.cookie" : "vendor/jquery.cookie/jquery.cookie",
    //"jquery.scrollbar" : "vendor/jquery/jquery.custom-scrollbar.min",
    "chosen" : "vendor/chosen/chosen.jquery.min",
    "domReady" : "vendor/domReady/domReady",
    "emoji": "vendor/wdt-emoji-bundle/emoji.min",
    //"jquery.bridget": "vendor/bridget/jquery.bridget",
    "ghostdown": "vendor/ghostdown/ghostdown",
    //"jquery.ghostdown": "vendor/ghost/jquery.ghostdown",
    // "jquery.fullcalendar": "vendor/fullcalendar/fullcalendar",
    "bootstrap": "vendor/bootstrap/dist/js/bootstrap.min",
    "jquery.validation": "vendor/jquery-validation/dist/jquery.validate.min",
    "jquery.iframe-transport":"vendor/jquery.iframe-transport/jquery.iframe-transport",
    "flat-ui": "vendor/flat-ui/dist/js/flat-ui.min",
    //"bootstrap.typeahead": "vendor/bootstrap/typeahead",
    //"bootstrap.typeahead.addresspicker": "vendor/bootstrap/typeahead-addresspicker",
    "typeahead":"vendor/typeahead.js/dist/typeahead.jquery.min",
    "typeahead.addresspicker":"vendor/typeahead-addresspicker/dist/typeahead-addresspicker.min",
    //"bootstrap.suppernote":'vendor/summernote/summernote.min',
    //"jquery.budkit": "vendor/budkit/budkit",
    //"jquery.validate": "vendor/validate/jquery.validate.min",
    "blueimp.fileupload": "vendor/blueimp-file-upload/js/jquery.fileupload",
    //"budkit.uploader" : "vendor/budkit/budkit-uploader",
    //"budkit.chat" : "vendor/budkit/budkit-chat",

    "budkit.editor" : "vendor/budkitjs/budkit-editor",
    "budkit.fields" : "vendor/budkitjs/budkit-fields",
    "budkit.form" : "vendor/budkitjs/budkit-form",

    "budkit.stream" : "vendor/budkitjs/budkit-stream",
    "budkit.map" : "vendor/budkitjs/budkit-map",
    "googlemaps" : 'vendor/googlemaps-amd/src/googlemaps',
    "gmaps" : "vendor/gmaps/gmaps.min",
    //"google.prettify":"//cdn.rawgit.com/google/code-prettify/master/loader/run_prettify",

    "html5shiv":"vendor/html5shiv/dist/html5shiv.min",
    //"html5formshim":"vendor/html5formshim/build/jquery.html5form.min"
    //
    //"bootstrap.summernote.highlight":"vendor/summernote/summernote-ext-highlight"
    "svg4everybody":"vendor/svg4everybody/dist/svg4everybody.min",
    "wdtEmojiBundle":"vendor/wdt-emoji-bundle/wdt-emoji-bundle.min",
    "webcomponentsjs": "vendor/webcomponentsjs/webcomponents.min"
  },
  shim: {
    'jquery.ui' : ['jquery'],
    'ghostdown' : ['jquery','dropzone'],
    //'mes' : ['jquery'],
    'chosen':    ['jquery'],
    //"jquery.ghostdown": ['ghostdown', 'jquery', 'jquery.ui'],
    //'jquery.cookie': ['jquery'],
    //'jquery.bridget': ['jquery'],
    //'jquery.scrollbar': ['jquery'],
    //'jquery.fullcalendar': ['jquery'],
    //'jquery.iframe-transport':['jquery'],
    //'blueimp.fileupload':["jquery.iframe-transport"],
    'bootstrap': ['jquery'],
    'jquery.validation': ['jquery'],
    'flat-ui': ['jquery'],
    //'bootstrap.summernote': ['jquery'],
    //"googlemaps":{
    //  deps:["async"]
    //},
    //"gmaps": {
    //  deps: ["jquery", "googlemaps"],
    //  exports: "GMaps"
    //},
    "emoji": {
      exports: "emoji"
    },
    "typeahead":{
      deps: ['bootstrap']
    },
    "typeahead.addresspicker":{
      deps: ['typeahead'],
      exports: "AddressPicker"
    }
  }
});