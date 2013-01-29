Ext.define('Centauros.view.athlete.container.DocumentationFieldset', {
    extend: 'Ext.form.FieldSet',
    alias: 'widget.athletedocumentationfieldset',
    constructor: function (baseconfig) {
        var me = this,
            config = Ext.merge({}, baseconfig, {
                collapsible: true,
                title: 'Documenta\u00E7\u00E3o',
                layout:'anchor',
                defaults: {
                    margin: '0 0 5 0'
                },
                items:
                    [
                        {
                            xtype: 'container',
                            border: false,
                            flex: 1,
                            defaults: {
                                margin: '0 5 5 0',
                                labelAlign: 'top',
                                xtype: 'textfield'
                            },
                            layout: {
                                type: 'hbox',
                                margin: '0 5 0 0'
                            },
                            items: [
                                {
                                    fieldLabel: 'CPF',
                                    itemId: 'cpf',
                                    width: 150
                                },
                                {
                                    fieldLabel: 'RG',
                                    itemId: 'rg',
                                    width: 150
                                }
                            ]
                        }
                    ]
            });
        me.callParent([config]);
    }
});