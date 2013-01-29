Ext.define('Centauros.controller.Athletes', {
    extend: 'Ext.app.Controller',
    models: ['Athlete'],
    refs:
    [
        { ref: 'cityCombo', selector: 'athleteaddressfieldset basecombo[itemId=cityId]' },
        { ref: 'neighborhoodCombo', selector: 'athleteaddressfieldset basecombo[itemId=neighborhoodId]' },
        { ref: 'createButton', selector: 'athleteedit button[itemId=createButton]' },
        { ref: 'edit', selector: 'athleteedit' }
    ],
    init: function () {
        var me = this;
        me.control({
            'athleteaddressfieldset basecombo[itemId=cityId]': {
                change: me.onCityComboChange
            },
            'athleteedit button[itemId=createButton]': {
                click: me.onCreateButtonClick
            }
        });
    },

    onCityComboChange: function (combo, newValue, oldValue, eOpts) {
        var me = this;
        var cityId = combo.value;
        var neighborhoodCombo = me.getNeighborhoodCombo();
        neighborhoodCombo.setDisabled(true);
        neighborhoodCombo.getStore().on('beforeload', function (store) {
            store.getProxy().extraParams = {
                cityId: cityId
            }
        });
        neighborhoodCombo.getStore().load();
        neighborhoodCombo.setDisabled(false);
    },

    validateForm: function () {
        var me = this;
        var form = me.getEdit().getForm();
        return form.isValid();
    },

    onCreateButtonClick: function (btn, e, eOpts) {
        var me = this;

        if (me.validateForm()) {

            var newAthlete = Ext.create('Centauros.model.Athlete');
            var fieldValues = me.getEdit().getForm().getFieldValues();

            Ext.Object.each(newAthlete.data, function (key, value, myself) {
                newAthlete.set(key, fieldValues[key]);
            });

            newAthlete.save({
                success: function (record, operation) {
                    var message = Ext.String.format("Caro {0}, seu cadastro foi efetuado.", record.data.name);
                    me.showInfo("Informa\u00E7\u00E3o", message);
                    me.disableAllFormFields();
                },
                failure: function (record, operation) {
                    me.showError("Erro", operation.request.scope.reader.jsonData["message"]);
                },
                scope: this
            });
        }
    },

    showInfo: function (title, msg, callback, scope) {
        Ext.Msg.show({
            title: title || 'Informa\u00E7\u00E3o',
            msg: msg,
            modal: true,
            icon: Ext.Msg.INFO,
            buttons: Ext.Msg.OK,
            scope: scope || this,
            fn: callback || {}
        });
    },

    showError: function (title, msg) {
        title = title || 'Erro';
        Ext.Msg.show({
            title: title,
            msg: msg,
            modal: true,
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
        });
    },

    disableAllFormFields: function () {
        var me = this;
        var form = me.getEdit().getForm();
        var fields = form.getFields().items;
        Ext.Object.each(fields, function (key, value, myself) {
            value.setDisabled(true);
        });
        me.getCreateButton().setDisabled(true);
    }
});