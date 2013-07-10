Ext.define('Sample1.store.Menus', {
    extend: 'Ext.data.Store',

    fields: ['text'],

    data: [
        { text: 'ButtonPanel1', id: 'ButtonPanel1' },
        { text: 'ButtonPanel2-container', id: 'ButtonPanel2-container' },
        { text: 'ButtonPanel2-panel', id: 'ButtonPanel2-panel' },
        { text: 'ButtonPanel3(afterrenderで動的追加)', id: 'ButtonPanel3-afterrender' },
        { text: 'ButtonPanel3(beforerenderで動的追加)', id: 'ButtonPanel3-beforerender' },
        { text: 'clear', id: 'clear' }

    ]
});
