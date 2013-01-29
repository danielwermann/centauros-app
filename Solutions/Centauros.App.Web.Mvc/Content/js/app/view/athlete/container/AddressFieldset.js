Ext.define('Centauros.view.athlete.container.AddressFieldset', {
    extend: 'Ext.form.FieldSet',
    alias: 'widget.athleteaddressfieldset',
    constructor: function (baseconfig) {
        var me = this,
            config = Ext.merge({}, baseconfig, {
                //collapsible: true,
                title: 'Endereço',
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
                                    fieldLabel: 'Endereço',
                                    itemId: 'address',
                                    name: 'address',
                                    width: 300,
                                    allowBlank: false
                                },
                                {
                                    fieldLabel: 'Complemento',
                                    itemId: 'addressComplement',
                                    name: 'addressComplement',
                                    width: 150
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            border: false,
                            flex: 1,
                            defaults: {
                                margin: '0 5 5 0',
                                labelAlign: 'top',
                                xtype: 'basecombo'
                            },
                            layout: {
                                type: 'hbox',
                                margin: '0 5 0 0'
                            },
                            items: [
                                {
                                    fieldLabel: 'Cidade',
                                    itemId: 'cityId',
                                    name: 'cityId',
                                    width: 250,
                                    queryMode: 'remote',
                                    url: 'Home/ListCities',
                                },
                                {
                                    fieldLabel: 'Bairro',
                                    itemId: 'neighborhoodId',
                                    name: 'neighborhoodId',
                                    width: 200,
                                    queryMode: 'remote',
                                    url: 'Home/ListNeighborhoods',
                                    disabled: true
                                }
                            ]
                        }
                    ]
            });
        me.callParent([config]);
    }
});