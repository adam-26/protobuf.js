"use strict";
const StringWrapper = require('./objectMappers/string');

function ObjectMapper() {
    this.wrappers = {};// IWrapper - needs to be extended to include 'getDefaultValue()', 'getTypeName()' func

    // Register defaults
    this.wrappers[StringWrapper.getTypeName()] = StringWrapper;
}

Object.defineProperties(ObjectMapper.prototype, {

    registerConverter: function(converter, typeName) {
        this.wrappers[typeName || converter.getTypeName()] = converter;
    },

    toObject: function(msg, opts, cfg) {
        const obj = {};
        for (var i = 0; i < cfg.length; ++i) {
            const isRepeated = cfg[i][0] === 1;
            const fieldName = cfg[i][3];

            if (msg[fieldName] !== null && msg.hasOwnProperty(fieldName)) {
                obj[fieldName] = isRepeated ?
                    this._toRepeatedObjectField(msg[fieldName], opts, cfg[i]) :
                    this._toObjectField(msg[fieldName], opts, cfg[i]);
            }
            else if (opts.defaults) {
                const fieldTypeName = cfg[i][4];
                obj[fieldName] = this._getDefaultValue(fieldTypeName);
            }
        }
        return obj;
    },

    toMessage: function(obj, msg, cfg) {
        const isRepeated = cfg[0] === 1;
        const fieldName = cfg[3];
        for (var i = 0; i < cfg.length; ++i) {
            if (msg[fieldName] !== null) {
                msg[fieldName] = isRepeated ?
                    this._toRepeatedMessageField(obj[fieldName], cfg[i]) :
                    this._toMessageField(obj[fieldName], cfg[i]);
            }
        }
        return msg;
    },

    _toRepeatedObjectField: function(fieldValues, opts, cfg) {
        const objValues = [];
        for (var i = 0; i < fieldValues.length; ++i) {
            objValues.push(this._toObjectField(fieldValues[i], opts, cfg));
        }
        return objValues;
    },

    _toRepeatedMessageField: function(fieldValues, cfg) {
        const objValues = [];
        for (var i = 0; i < fieldValues.length; ++i) {
            objValues.push(this._toMessageField(fieldValues[i], cfg));
        }
        return objValues;
    },

    _toObjectField: function(value, opts, cfg) {
        const fieldType = cfg[2];
        const fieldTypeName = cfg[4];
        if (fieldType === 's') {
            if (this._hasWrapper(fieldTypeName)) {
                return this._getWrapper(fieldTypeName).toObject(value);
            }

            // fallback to default behavior
            return value;
        }

        if (fieldType === 'a') {
            // todo
        }

        if (fieldType === 'm') {
            // todo
        }

        if (fieldType === 'e') {
            // todo
        }

        // todo - its a nested message (create a wrapper for nested messages)

        throw new Error('_toObjectField not implemented for type');
    },

    _toMessageField: function(value, cfg) {
        const fieldType = cfg[2];
        const fieldTypeName = cfg[4];
        if (fieldType === 's') {
            if (this._hasWrapper(fieldTypeName)) {
                return this._getWrapper(fieldTypeName).fromObject(value);
            }

            // fallback to default behavior
            return value;
        }

        if (fieldType === 'a') {
            // todo
        }

        if (fieldType === 'm') {
            // todo
        }

        if (fieldType === 'e') {
            // todo
        }

        // todo - its a nested message (create a wrapper for nested messages)

        throw new Error('_toMessageField not implemented for type');
    },

    _getDefaultValue: function(typeName) {
        return this._getWrapper(typeName).getDefaultValue();
    },

    _hasWrapper: function(typeName) {
        return typeof this.wrappers[typeName] !== 'undefined';
    },

    _getWrapper: function(typeName) {
        if (this.wrappers[typeName]) {
            return this.wrappers[typeName];
        }

        throw new Error('No objectMapper wrapper registered for type ' + typeName);
    }
});

ObjectMapper.className = "ObjectMapper";

module.exports = new ObjectMapper();