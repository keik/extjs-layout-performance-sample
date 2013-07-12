Ext.define('Sample1.controller.ConfigPanelController', {
    extend: 'Ext.app.Controller',

    views: [
        'ConfigPanel'
    ],

    stores: [
        'Configs'
    ],

    refs: [
    ],

    // イベントリスナを登録する
    init: function () {
        Ext.log('['+this.$className+'] init()');
        this.control({
//            'viewport grid': {
//                selectionchange: this.onMenuChanged
//            },
        });
    },

    onLaunch: function () {
        Ext.log('['+this.$className+'] onLaunch()');
    },

    onMenuChanged: function(model, record) {
        var start = (new Date().getTime());
        Ext.log(start +', '+ this.$className +'.onMenuChanged() start');
        var mainArea = Ext.ComponentQuery.query('viewport #main-area')[0];

        var id = record[0].get('id');

        if (id == 'clear') {
            mainArea.removeAll();
        } else {
            var cmp = Ext.create('Sample1.view.' + id);
            mainArea.removeAll();
            mainArea.add(cmp);
        }

        var end = (new Date).getTime();
        Ext.log(end +', '+ this.$className +'.onMenuChanged() end ('+ (end - start) +' ms)');
    }
});
