Ext.define('Sample1.view.ButtonPanel3-beforerender', {
    extend: 'Ext.container.Container',
    alias: 'widget.button-panel-3-beforerender',

    listeners: {
        beforerender: {
            fn: function (cmp, eOpts) {
                Ext.log('['+this.$className+'] beforerender()');
                var button = { xtype: 'button', text: 'button' };
                for (var i = 0; i < 1000; i++) {
                    cmp.add(button);
                }
            }
        }
    },

    initComponent: function () {
        Ext.log('['+this.$className+'] initComponent()');

        this.callParent();
    }
});
