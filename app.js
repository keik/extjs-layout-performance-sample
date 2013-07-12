Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Sample1',

    appFolder: 'app',

    autoCreateViewport: true,

    controllers: [
        'ViewportController',
        'MenuListController',
        'ConfigPanelController'
    ],

    launch: function () {
        Ext.log('['+this.$className+'] launch()');
    }
});
