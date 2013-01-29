Ext.define('Centauros.view.athlete.Panel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.athletepanel',
    constructor: function (baseconfig) {
        var me = this,
			config = Ext.merge({}, baseconfig, {
			    frame: true,
			    border: false,
			    layout: {
			        type: 'vbox',
			        align: 'stretch',
			        border: false
			    },
			    items: [
			        { xtype: 'athleteedit', flex: 4 }
                ]
			});
        me.callParent([config]);
    }
});