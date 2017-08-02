"use strict";
/**
 * Runtime message from/to plain object converters.
 * @namespace
 */
var converter = exports;

var Enum = require("../../../src/enum"),
    util = require("../../../src/util");

converter.GET_OBJECT_MAP_FN = "_getObjectMap";

/**
 * Generates a plain object to runtime message converter specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
converter.getObjectMap = function getObjectMap(mtype, toJsType) {
    /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
    var fields = mtype.fieldsArray;
    var gen = util.codegen([], mtype.name + "$" + converter.GET_OBJECT_MAP_FN);

    // Output enum maps
    // TODO: This should be available from enum types, get by idx/value
    var enums = [];
    for (var i = 0; i < fields.length; ++i) {
        var field = fields[i].resolve();
        if (field.resolvedType instanceof Enum) {//map; String -> idx, and array[indexed values]
            if (enums.indexOf(field.resolvedType.name) !== -1) {
                continue;
            }
            enums.push(field.resolvedType.name);

            var enumValues = [],
                enumProp = util.camelCase(util.safeProp(field.resolvedType.name).substring(1)),
                keys = Object.keys(field.resolvedType.values);
            for (var j = 0; j < keys.length; ++j) {
                var value = keys[j];
                var idx = field.resolvedType.values[value];
                enumValues.push([idx, value]);
            }

            gen
            ("var %s={", enumProp + "ById");
            for (j = 0; j < enumValues.length; ++j) gen
            ("%d: '%s',", enumValues[j][0], enumValues[j][1]);
            gen
            ("};");
            gen
            ("var %s={", enumProp + "ByName");
            for (j = 0; j < enumValues.length; ++j) gen
            ("'%s': %d,", enumValues[j][1], enumValues[j][0]);
            gen
            ("};");
        }
    }

    gen
    ("return [");

    for (var i = 0; i < fields.length; ++i) {
        var field = fields[i].resolve(),
            prop = util.safeProp(field.name),
            req = field.required ? 1 : 0,
            rep = field.repeated ? 1 : 0,
            fieldType = field.bytes ? 'a' : field.map ? 'm' : 's',  // a - array, m - map, s - scalar, e - enum
            suffix = i === fields.length ? "" : ",",

            // Prevents Object/Array<> syntax from being prepended to type name - allows for easier objMap cfg
            fieldWrapper = {type: field.type, resolvedType: field.resolvedType, resolve: function() { return field; }};

        if (field.resolvedType instanceof Enum) {//map; String -> idx, and array[indexed values]
            enumProp = util.camelCase(util.safeProp(field.resolvedType.name).substring(1));
            gen("[%d, %d, '%s', '%s', %s, %s, %s]" + suffix, req, rep, 'e', prop.substring(1), toJsType(fieldWrapper), enumProp + "ById", enumProp + "ByName");
        } else {
            gen("[%d, %d, '%s', '%s', '%s']" + suffix, req, rep, field.resolvedType ? field.resolvedType.name : fieldType, prop.substring(1), toJsType(fieldWrapper));
        }
    }

    gen(
    "];");

    return gen;
    /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
};


/**
 * Generates a plain object to runtime message converter specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
converter.fromObject = function fromObject(mtype) {
    /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
    var fields = mtype.fieldsArray;
    var gen = util.codegen(["d"], mtype.name + "$fromObject")
    ("if(d instanceof this.ctor)")
    ("return d");
    if (!fields.length) return gen
    ("return new this.ctor");

    gen(
    "return $root.objectMapper.toMessage(d,")
    ("new this.ctor,")
    ("this.ctor." + converter.GET_OBJECT_MAP_FN + "()")
    (");");

    return gen;
    /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
};

/**
 * Generates a runtime message to plain object converter specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
converter.toObject = function toObject(mtype) {
    /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
    var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
    if (!fields.length)
        return util.codegen()("return {}");
    var gen = util.codegen(["m", "o"], mtype.name + "$toObject")
    ("if(!o)")
    ("o={}");

    // ("var d={}");

    gen(
    "return $root.objectMapper.toObject(m, o,")
    ("this.ctor." + converter.GET_OBJECT_MAP_FN + "()")
    (");");

    return gen;
    /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
};
