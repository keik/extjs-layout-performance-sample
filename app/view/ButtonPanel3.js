Ext.define('Sample1.view.ButtonPanel3', {
    extend: 'Ext.container.Container',
    alias: 'widget.button-panel-3',

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
    },

//    afterRender: function (a, b, c) {
//        console.log(a);
//        console.log(b);
//        console.log(c);
//        var button = { xtype: 'button', text: 'button' };
//        for (var i = 0; i < 100; i++) {
//            items.add(button);
//        }
//    }
});
