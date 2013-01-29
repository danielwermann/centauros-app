Ext.define('Centauros.view.viewport.Menu', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.viewportmenu',
    constructor: function (baseconfig) {
        var me = this,
			config = Ext.merge({}, baseconfig, {
			    floatable: false,
			    split: true,
			    frame: true,
			    layout: {
			        type: 'vbox',
			        align: 'stretch'
			    },
			    items: [
                    {
                        xtype: 'treepanel',
                        frame: false,
                        border: 0,
                        itemId: 'menu',
                        animate: false,
                        minHeight: 800,
                        rootVisible: false,
                        store: Ext.create('Ext.data.TreeStore', {
                            root: {
                                expanded: true,
                                children: [
                                    { text: "Cadastros", expanded: true, children: [
                                        { text: "Atleta", leaf: true }
                                    ]
                                    }
                                ]
                            }
                        })
                    }
                ]
			});
        me.callParent([config]);
    }
});