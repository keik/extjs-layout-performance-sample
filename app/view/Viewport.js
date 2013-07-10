Ext.define('Sample1.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.viewport',

    initComponent : function() {
        Ext.log('['+this.$className+'] initComponent()');

        Ext.apply(this, {
            layout : 'border',
            items : [{
                itemId: 'menu-area',
                xtype: 'grid',
                region: 'west',
                store: 'Menus',
                columns: [
                    { dataIndex: 'text', flex: 1 }
                ],
                width: 300
            }, {
                itemId: 'main-area',
                xtype: 'container',
                region: 'center',
                layout: 'fit'
            }]
        });

        this.callParent();
    }
});
