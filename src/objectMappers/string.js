"use strict";

// String type wrapper
module.exports = {

    getTypeName: function() {
        return 'string';
    },

    getDefaultValue: function() {
        return '';
    },

    fromObject: function(value) {
        return value;
    },

    toObject: function(value, options) {
        return value;
    }
};
