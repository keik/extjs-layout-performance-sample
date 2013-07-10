Ext.define('Sample1.view.ButtonPanel1-sync', {
    extend: 'Ext.container.Container',
    alias: 'widget.button-panel-1-sync',

    items: [
        // 5個ずつ。
        // 5
        { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' },
        // 10
        { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' },
        // 15
        { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' },
        // 20
        { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' },
        // 25
        { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' },
        // 30
        { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' },
        // 35
        { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' },
        // 40
        { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' },
        // 45
        { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' },
        // 50
        { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' },
        // 55
        { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' },
        // 60
        { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' },
        // 65
        { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' },
        // 70
        { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' },
        // 75
        { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' },
        // 80
        { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' },
        // 85
        { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' },
        // 90
        { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' },
        // 95
        { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' },
        // 100
        { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }, { xtype: 'button', text: 'button' }
    ],

    initComponent: function () {
        Ext.log('['+this.$className+'] init()');

        this.callParent();
    }
});
