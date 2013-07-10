Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Sample1',

    appFolder: 'app',

    autoCreateViewport: true,

    controllers: [
        'ViewportController'
    ],

    launch: function () {
        Ext.log('['+this.$className+'] launch()');
    }
});
