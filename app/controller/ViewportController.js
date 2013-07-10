Ext.define('Sample1.controller.ViewportController', {
    extend: 'Ext.app.Controller',

    views: [
        'ButtonPanel1',
        'ButtonPanel2-container',
        'ButtonPanel2-panel',
        'ButtonPanel3-afterrender',
        'ButtonPanel3-beforerender'
    ],

    stores: [
        'Menus'
    ],

    refs: [
    ],

    // イベントリスナを登録する
    init: function () {
        Ext.log('['+this.$className+'] init()');
        this.control({
            'viewport grid': {
                selectionchange: this.onMenuChanged
            },
        });
    },

    // 初期表示パネルを配置する
    onLaunch: function () {
        Ext.log('['+this.$className+'] onLaunch()');
    },

    onMenuChanged: function(model, record) {
        Ext.log('['+this.$className+'] onMenuChanged()');
        var mainArea = Ext.ComponentQuery.query('viewport #main-area')[0];

        var id = record[0].get('id');

        if (id == 'clear') {
            mainArea.removeAll();
        } else {
            var cmp = Ext.create('Sample1.view.' + id);
            mainArea.removeAll();
            mainArea.add(cmp);
        }


    }
});
