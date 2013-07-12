Ext.define('Sample1.view.ConfigPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.config-panel',

    title: 'Generate Component',
    margin: '4 0 0 0',
    bodyPadding: 4,

    defaults: {
    },

    items: [
//        { xtype: 'grid', fieldLabel: '種類',
//          store: 'Configs', columns: [ {dataIndex: 'text'}]
//        },
        { xtype: 'combo', fieldLabel: '種類',
          store: ['aaa', 'bbb', 'ccc'],
        },

        { xtype: 'combo', fieldLabel: '数' },
        { xtype: 'combo', fieldLabel: '場所' },
        { xtype: 'combo', fieldLabel: '方法' },
        { xtype: 'combo', fieldLabel: 'タイミング' },
        { xtype: 'toolbar',
            ui: 'footer',
            dock: 'bottom',
            items: ['->', {
                text:'Generate',
                scope: this,
                handler: this.onClearGroupingClick
            }]
        }
    ],

    initComponent : function() {
        Ext.log('['+this.$className+'] initComponent()');

        this.callParent();
    }
});

var hoge = Ext.create('Ext.data.Store', {
    fields: ['name'],
    data: [
        { "name": "button"},
        { "name": "inputField"}
    ]
});

