Ext.define('Centauros.view.athlete.container.HealthCarePlanFieldset', {
    extend: 'Ext.form.FieldSet',
    alias: 'widget.athletehealthcareplanfieldset',
    constructor: function (baseconfig) {
        var me = this,
            config = Ext.merge({}, baseconfig, {
                //collapsible: true,
                title: 'Dados de Sa\u00FAde',
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
                                    fieldLabel: 'Plano de Sa\u00FAde',
                                    itemId: 'healthCarePlanId',
                                    name: 'healthCarePlanId',
                                    xtype: 'basecombo',
                                    width: 250,
                                    queryMode: 'remote',
                                    url: 'Home/ListHealthCarePlanes'
                                },
                                {
                                    fieldLabel: 'N\u00FAmero do Cart\u00E3o',
                                    itemId: 'healthCarePlanCardNumber',
                                    name: 'healthCarePlanCardNumber',
                                    xtype: 'textfield',
                                    width: 180,
                                    maskRe: /^[0-9]$/
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            border: false,
                            flex: 1,
                            defaults: {
                                margin: '0 5 3 0',
                                labelAlign: 'top',
                                xtype: 'textarea'
                            },
                            layout: {
                                type: 'vbox',
                                margin: '0 5 0 0'
                            },
                            items: [
                                {
                                    fieldLabel: 'Tipo Sangu\u00EDneo',
                                    itemId: 'bloodType',
                                    name: 'bloodType',
                                    xtype: 'basecombo',
                                    width: 140,
                                    queryMode: 'local',
                                    store: {
                                        data: [
                                            { 'id': 'O−', 'name': 'O-' },
                                            { 'id': 'O+', 'name': 'O+' },
                                            { 'id': 'A−', 'name': 'A-' },
                                            { 'id': 'A+', 'name': 'A+' },
                                            { 'id': 'B−', 'name': 'B-' },
                                            { 'id': 'B+', 'name': 'B+' },
                                            { 'id': 'AB−', 'name': 'AB-' },
                                            { 'id': 'AB+', 'name': 'AB+' }
                                        ]
                                    },
                                    allowBlank: false
                                },
                                {
                                    fieldLabel: 'Hist\u00F3rico de Les\u00F5es',
                                    itemId: 'injuriesHistory',
                                    name: 'injuriesHistory',
                                    width: 400
                                },
                                {
                                    fieldLabel: 'Alergias/Doen\u00E7as',
                                    itemId: 'allergiesDiseases',
                                    name: 'allergiesDiseases',
                                    width: 400
                                }
                            ]
                        }
                    ]
            });
        me.callParent([config]);
    }
});