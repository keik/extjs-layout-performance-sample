Ext.define('Sample1.view.MenuList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.menu-list',

    store: 'Menus',
    columns: [
        { dataIndex: 'text', flex: 1 }
    ],

    initComponent : function() {
        Ext.log('['+this.$className+'] initComponent()');

        this.callParent();
    }
});
