Ext.define('Centauros.view.athlete.container.DetailsFieldset', {
    extend: 'Ext.form.FieldSet',
    alias: 'widget.athletedetailsfieldset',
    constructor: function (baseconfig) {
        var me = this,
            config = Ext.merge({}, baseconfig, {
                //collapsible: true,
                title: 'Detalhes',
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
                                labelAlign: 'top'
                            },
                            layout: {
                                type: 'hbox',
                                margin: '0 5 0 0'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Nome',
                                    itemId: 'name',
                                    name: 'name',
                                    width: 400,
                                    allowBlank: false
                                },
                                {
                                    xtype: 'datefield',
                                    fieldLabel: 'Data de Nascimento',
                                    itemId: 'birthDate',
                                    name: 'birthDate',
                                    allowBlank: false
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
                                        name: 'cpf',
                                        width: 150,
                                        allowBlank: false,
                                        vtype: 'cpf',
                                        plugins: [new Centauros.view.base.InputTextMask('999.999.999-99')]
                                    },
                                    {
                                        fieldLabel: 'RG',
                                        itemId: 'rg',
                                        name: 'rg',
                                        width: 150,
                                        allowBlank: false,
                                        maxLength: 12
                                    }
                                ]
                            },
                         {
                            xtype: 'container',
                            border: false,
                            flex: 1,
                            defaults: {
                                margin: '0 5 3 0',
                                labelAlign: 'top'
                            },
                            layout: {
                                type: 'hbox',
                                margin: '0 5 0 0'
                            },
                            items: [
                                {
                                    xtype: 'basecombo',
                                    fieldLabel: 'Sexo',
                                    itemId: 'gender',
                                    name: 'gender',
                                    width: 100,
                                    queryMode: 'local',
                                    store: {
                                        data: [
                                            { 'id': 'M', 'name': 'Masculino' },
                                            { 'id': 'F', 'name': 'Feminino' }
                                        ]
                                    },
                                    allowBlank: false
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'Peso (kg)',
                                    itemId: 'weight',
                                    name: 'weight',
                                    width: 100,
                                    allowBlank: false
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'Altura (cm)',
                                    itemId: 'height',
                                    name: 'height',
                                    width: 100,
                                    allowBlank: false
                                }
                            ]
                            },
                        {
                            xtype: 'container',
                            border: false,
                            flex: 1,
                            defaults: {
                                margin: '0 5 3 0',
                                labelAlign: 'top'
                            },
                            layout: {
                                type: 'hbox',
                                margin: '0 5 0 0'
                            },
                            items: [
                                {
                                    xtype: 'datefield',
                                    fieldLabel: 'Primeiro Treino',
                                    itemId: 'firstTrainingDate',
                                    name: 'firstTrainingDate',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'basecombo',
                                    fieldLabel: 'Posição',
                                    itemId: 'position',
                                    name: 'position',
                                    width: 200,
                                    queryMode: 'local',
                                    store: {
                                        data: [
                                            { 'id': 1, 'name': '1 e 3 - Pilar' },
                                            { 'id': 2, 'name': '2 - Hooker' },
                                            { 'id': 3, 'name': '4 e 5 - Segunda Linha' },
                                            { 'id': 4, 'name': '6 e 7 - Asa' },
                                            { 'id': 5, 'name': '8 - Oitavo' },
                                            { 'id': 6, 'name': '9 - Scrum-half' },
                                            { 'id': 7, 'name': '10 - Fly-half' },
                                            { 'id': 8, 'name': '11 - Ponta Cego' },
                                            { 'id': 9, 'name': '12 - Primeiro Centro' },
                                            { 'id': 10, 'name': '13 - Segundo Centro' },
                                            { 'id': 11, 'name': '14 - Ponta' },
                                            { 'id': 12, 'name': '15 - Fullback' }
                                        ]
                                    },
                                    allowBlank: false
                                },
                                {
                                    xtype: 'basecombo',
                                    fieldLabel: 'Experiência',
                                    itemId: 'experience',
                                    name: 'experience',
                                    width: 150,
                                    queryMode: 'local',
                                    store: {
                                        data: [
                                            { 'id': 1, 'name': 'Formativa' },
                                            { 'id': 2, 'name': 'Adulto' },
                                            { 'id': 3, 'name': 'Mais de 3 anos' }
                                        ]
                                    },
                                    allowBlank: false
                                }
                            ]
                        }
                    ]
            });
        me.callParent([config]);
    }
});