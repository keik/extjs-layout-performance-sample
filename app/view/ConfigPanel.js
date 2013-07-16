Ext.define('Sample1.view.ConfigPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.config-panel',

    title: 'Generate Components',
    margin: '4 0 0 0',
    bodyPadding: 8,

    defaults: {
        width: '80%',
        margin: 4
    },

    items: [
        { xtype: 'combo', fieldLabel: '種類', name: 'type', allowBlank: false,
          value : 'button', store: ['button', 'label', 'random'] },
        { xtype: 'container', width: '100%', layout: 'column', items: [
            { xtype: 'slider', fieldLabel: '数', id: 'num-slider', name: 'num', allowBlank: false,
              width: '80%',
              value: 10, minValue: 0, maxValue: 200, increment: 1 },
            { xtype: 'label', itemId: 'num-label', text: '10', margin:'0 0 0 12' }
        ]},
        { xtype: 'checkbox', fieldLabel: '遅延レイアウト', name: 'lazy', checked: true},

        { xtype: 'toolbar',
            ui: 'footer',
            dock: 'bottom',
            items: [
                '->',
                { itemId: 'clear-button', text:'Clear' },
                { itemId: 'generate-button', text:'Generate' }
            ]
        }
    ],

    initComponent : function () {
        Ext.log('['+this.$className+'] initComponent()');
        this.callParent();
    }
});

