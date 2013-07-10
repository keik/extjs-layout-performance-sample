Ext.define('Sample1.view.ButtonPanel3-afterrender', {
    extend: 'Ext.container.Container',
    alias: 'widget.button-panel-3-afterrender',

    listeners: {
        afterrender: {
            fn: function (cmp, eOpts) {
                Ext.log('['+this.$className+'] afterrender()');
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
