(function() {
    tinymce.create('tinymce.plugins.custombuttons', {
        init : function(ed, url) {
            ed.addButton('boldlist', {
                title : 'List with bold items',
                cmd : 'boldlist',
                icon : 'bullist',
            });
            ed.addCommand('boldlist', function() {
                var selected_text = ed.selection.getContent();
                var return_text = '';
                return_text = '<ul class="bold"><li>&nbsp;</li></ul>';
                ed.execCommand('mceInsertContent', 0, return_text);
            });
        },
        createControl : function(n, cm) {
            return null;
        },
        getInfo : function() {
            return {
                longname : 'Custom buttons',
                author : 'author name',
                version : "0.1"
            };
        }
    });
 
    // Register plugin
    tinymce.PluginManager.add( 'custombuttons', tinymce.plugins.justcoded );
})();