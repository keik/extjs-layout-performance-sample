Ext.define('Sample1.store.Configs', {
    extend: 'Ext.data.Store',

    fields: ['text'],

    data: [
        { text: 'combo', id: 'combo' },
        { text: 'button', id: 'button' }
    ]
});
