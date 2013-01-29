Ext.define('Centauros.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'border',
    requires: [
        'Centauros.view.viewport.Menu'
    ],

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            items: [
            {
                region: 'west',
                collapsible: true,
                title: 'Menu [Centauros Rugby Clube]',
                width: 250,
                items: [
                    {
                        xtype: 'viewportmenu'
                    }
                ]
            }, {
                region: 'center',
                xtype: 'tabpanel',
                activeTab: 0,
                items: {
                    title: 'Cadastro de Atleta',
                    xtype: 'athletepanel'
                }
            }]
        });

        me.callParent(arguments);
    }
});