Ext.define('Centauros.view.base.Combo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.basecombo',
    constructor: function (config) {
        Ext.applyIf(config, {
            //1 - normalization
            store: {},
            listConfig: {
                getInnerTpl: function () {
                    var field = 'values.' + this.displayField;
                    return '{[Ext.htmlEncode(' + field + ')]}';
                }
            },
            //2 - common defaults
            valueField: 'id',
            displayField: 'name',
            minChars: 3,
            allowBlank: false,
            forceSelection: true
        });

        Ext.applyIf(config.store, {
            xtype: 'store'
        });

        //3 - local defaults
        if (config.store.data || config.queryMode === 'local') {
            Ext.applyIf(config, {
                queryMode: 'local'
            });

            Ext.applyIf(config.store, {
                fields: [
					{ name: config.valueField },
					{ name: config.displayField }
				]
            });
        }
        //4 - remote defaults
        else {
            Ext.applyIf(config, {
                queryMode: 'remote',
                pageSize: 10,
                matchFieldWidth: false
            });

            Ext.applyIf(config.store, {
                pageSize: config.pageSize,
                remoteSort: true,
                remoteFilter: true,
                fields: [
					{ name: config.valueField, mapping: Ext.String.capitalize(config.valueField) },
					{ name: config.displayField, mapping: Ext.String.capitalize(config.displayField) }
				],
                proxy: {
                    type: 'ajax',
                    url: config.url,
                    reader: {
                        type: 'json',
                        root: 'data',
                        totalProperty: 'total'
                    }
                }
            });

            Ext.applyIf(config.listConfig, {
                width: 270,
                height: 220
            });
        }

        this.callParent(arguments);

        // Hack: Set the height of the picker accordingly to the paging toolbar height.
        if (this.queryMode === "remote") {

            var renderingMode = (document.compatMode === 'CSS1Compat') ? 'Standards' : 'Quirks';

            if ((renderingMode === 'Standards' && Ext.isIE) || !Ext.isIE) {

                var resizePicker = function (combo) {
                    var picker = combo.getPicker();
                    var pickerHeight = picker.getHeight();
                    var listItemHeight = picker.getEl().dom.childNodes[0].offsetHeight;

                    if (pickerHeight < (listItemHeight + 20)) {
                        picker.setHeight(pickerHeight + 20);
                        picker.getEl().dom.childNodes[0].style.height = listItemHeight + "px";
                    }
                };

                if (!config.preventCalculateResizeOnExpand) {
                    this.on('expand', resizePicker);
                }
            }
        }
    }
});