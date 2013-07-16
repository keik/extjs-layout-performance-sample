Ext.define('Sample1.controller.ConfigPanelController', {
    extend: 'Ext.app.Controller',

    views: [
        'ConfigPanel'
    ],

    stores: [
        'Configs'
    ],

    refs: [
    ],

    // イベントリスナを登録する
    init: function () {
        Ext.log('['+this.$className+'] init()');
        this.control({
            // スライダーの値が変更されたら
            'config-panel #num-slider': {
                change: this.onSliderChange
            },
            // Generateボタンをクリックされたら
            'config-panel #generate-button': {
                click: this.onGenerateButtonClick
            },
            // Clearボタンをクリックされたら
            'config-panel #clear-button': {
                click: this.onClearButtonClick
            }
        });
    },

    onLaunch: function () {
        Ext.log('['+this.$className+'] onLaunch()');
    },

    onSliderChange: function (slider, newValue, thumb, eOpts) {
        // Ext.log('['+this.$className+'] onSliderChange()');
        slider.nextSibling('#num-label').setText(newValue);
    },

    onGenerateButtonClick: function(cmp, e, eOpts) {
        Ext.log('['+this.$className+'] onGenerateButtonClick()');

        var form = Ext.ComponentQuery.query('config-panel')[0].getForm();
        if (form.isValid()) {

            // パラメータ取得
            var params = form.getValues(),
                type = params.type,
                num = parseInt(params.num),
                lazy = params.lazy;

            // 操作対象コンポーネント取得
            var mainArea = Ext.ComponentQuery.query('viewport #main-area')[0];
            var addee = { xtype: type, text: type, margin: 2 };

            // ------------コンポーネント操作 start------------
            var start = (new Date().getTime());
            Ext.log(start +', '+ this.$className +'.onGenerateClicked() start');

            // 遅延レイアウトするかどうか（）
            if (lazy) Ext.suspendLayouts();

            for (var i = 0; i < num; i++) {
                mainArea.add(addee);
            }

            if (lazy) Ext.resumeLayouts(true);

            // ------------コンポーネント操作 end------------
            var end = (new Date).getTime();
            Ext.log(end +', '+ this.$className +'.onGenerateClicked() end ('+ (end - start) +' ms)');
        }
    },

    onClearButtonClick: function (cmp, e, eOpts) {
        Ext.log('['+this.$className+'] onClearButtonClick()');

        // 操作対象コンポーネント取得
        var mainArea = Ext.ComponentQuery.query('viewport #main-area')[0];

        // ------------コンポーネント操作 start------------
        var start = (new Date().getTime());
        Ext.log(start +', '+ this.$className +'.onGenerateClicked() start');

        // メインエリアにあるすべてのコンポーネントを削除
        mainArea.removeAll();

        // ------------コンポーネント操作 end------------
        var end = (new Date).getTime();
        Ext.log(end +', '+ this.$className +'.onGenerateClicked() end ('+ (end - start) +' ms)');
    }
});
