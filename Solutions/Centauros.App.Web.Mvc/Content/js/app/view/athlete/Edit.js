Ext.define('Centauros.view.athlete.Edit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.athleteedit',
    constructor: function (baseconfig) {
        var me = this,
            config = Ext.merge({}, baseconfig, {
                layout: 'anchor',
                defaults: {
                    margin: '0 5 5 0'
                },
                border: false,
                frame: true,
                autoScroll: true,
                items: [
                    { xtype: 'athletedetailsfieldset', flex: 1 },
                    { xtype: 'athletecontactfieldset', flex: 1 },
                    { xtype: 'athleteaddressfieldset', flex: 1 },
                    { xtype: 'athletehealthcareplanfieldset', flex: 1 },
                    {
                        xtype: 'toolbar',
                        dock: 'bottom',
                        defaults: {
                            xtype: 'button',
                            scale: 'medium'
                        },
                        items:
                        [
                            '->',
                            {
                                text: 'Salvar',
                                itemId: 'createButton',
                                iconCls: 'icon-create'
                            }
                        ]
                    }
                ]
            });
        me.callParent([config]);
    }
});