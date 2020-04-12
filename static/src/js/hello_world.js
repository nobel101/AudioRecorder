odoo.define('web.audio', function(require){
    "use strict";
//    var fieldRegistry = require('web.field_registry');
    var AbstractAction = require('web.AbstractAction');
    var FiledChar = require('web.field_registry.get.Char')
    var QWeb = require('web.core.qweb');
    var AudioField = FiledChar.extend({
            _onInput: function () {
        if (this.$el.localName != 'audio') {
            this._super.apply(this, arguments);
        }
    },
    // this func is fix error when click on player
    _getValue: function () {
        if (this.$el.localName != 'audio') {
            this._super.apply(this, arguments);
        }
    },
    _renderPlayer: function () {
        this.replaceElement(QWeb.render('audio_field', {'widget':this, 'options': this.nodeOptions}));
    },
    _renderReadonly: function () {
        this._renderPlayer();
    },
        });
web.field_registry.add('audio_field', AudioField)
});