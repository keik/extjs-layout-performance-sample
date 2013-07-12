Ext.define('Sample1.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.viewport',

    layout: 'border',

    items: [{
        itemId: 'menu-area',
        xtype: 'container',
        region: 'west',
        margin: 4,
        width: 300,
        items: [
            { xtype: 'menu-list' },
            { xtype: 'config-panel' }
        ]
    }, {
        itemId: 'main-area',
        xtype: 'container',
        region: 'center',
        layout: 'fit'
    }],

    initComponent : function() {
        Ext.log('['+this.$className+'] initComponent()');

        this.callParent();
    }
});
