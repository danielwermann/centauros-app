Ext.apply(Ext.form.field.VTypes, {
    cpf: function (val, field) {
        if (val == "") return true;
        var b;
        s = val.replace(/\D/g, "");
        if (parseInt(s, 10) == 0) {
            return false;
        }

        var equals = true;
        for (i = 0; i < s.length - 1; i++) {
            if (s.charAt(i) != s.charAt(i + 1)) {
                equals = false;
            }
        }

        if (equals) {
            return false;
        }

        var h = s.substr(0, 9);
        var a = s.substr(9, 2);
        var d = 0;
        for (b = 0; b < 9; b++) {
            d += h.charAt(b) * (10 - b);
        }
        if (d == 0) {
            return false;
        }
        d = 11 - (d % 11);
        if (d > 9) {
            d = 0;
        }
        if (a.charAt(0) != d) {
            return false;
        }
        d *= 2;
        for (b = 0; b < 9; b++) {
            d += h.charAt(b) * (11 - b);
        }
        d = 11 - (d % 11);
        if (d > 9) {
            d = 0;
        }
        if (a.charAt(1) != d) {
            return false;
        }
        return true;
    },
    cpfText: 'CPF inv\u00E1lido.',

    phone: function (val, field) {
		if(!val) return false;
		var numbers = val.toString().replace(/\D/gi, '');
		return numbers.length === 10;
	},
    phoneText: 'Telefone inv\u00E1lido.'
});