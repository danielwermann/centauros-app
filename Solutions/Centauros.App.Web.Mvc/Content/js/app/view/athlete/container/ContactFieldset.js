Ext.define('Centauros.view.athlete.container.ContactFieldset', {
    extend: 'Ext.form.FieldSet',
    alias: 'widget.athletecontactfieldset',
    constructor: function (baseconfig) {
        var me = this,
            config = Ext.merge({}, baseconfig, {
                //collapsible: true,
                title: 'Contatos',
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
                                margin: '0 5 3 0',
                                labelAlign: 'top',
                                xtype: 'textfield'
                            },
                            layout: {
                                type: 'hbox',
                                margin: '0 5 0 0'
                            },
                            items: [
                                {
                                    fieldLabel: 'Telefone',
                                    itemId: 'telephone',
                                    name: 'telephone',
                                    width: 150,
                                    vtype: 'phone',
                                    plugins: [new Centauros.view.base.InputTextMask('(99) 9999-9999')]
                                },
                                {
                                    fieldLabel: 'Celular',
                                    itemId: 'cellphone',
                                    name: 'cellphone',
                                    width: 150,
                                    allowBlank: false,
                                    vtype: 'phone',
                                    plugins: [new Centauros.view.base.InputTextMask('(99) 9999-9999')]
                                },
                                {
                                    fieldLabel: 'E-mail',
                                    itemId: 'email',
                                    name: 'email',
                                    width: 250,
                                    allowBlank: false,
                                    vtype: 'email'
                                },
                            ]
                        },
                        {
                            xtype: 'container',
                            border: false,
                            flex: 1,
                            defaults: {
                                margin: '0 5 3 0',
                                labelAlign: 'top',
                                xtype: 'textfield'
                            },
                            layout: {
                                type: 'hbox',
                                margin: '0 5 0 0'
                            },
                            items: [
                                
                                {
                                    fieldLabel: 'Contato de Emergência',
                                    itemId: 'urgencyContactName',
                                    name: 'urgencyContactName',
                                    width: 250,
                                    allowBlank: false
                                },
                                {
                                    fieldLabel: 'Telefone',
                                    itemId: 'urgencyContactTelephone',
                                    name: 'urgencyContactTelephone',
                                    width: 150,
                                    allowBlank: false,
                                    vtype: 'phone',
                                    plugins: [new Centauros.view.base.InputTextMask('(99) 9999-9999')]
                                }
                            ]
                        }
                    ]
            });
        me.callParent([config]);
    }
});