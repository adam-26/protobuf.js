// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.test_vector_tile || ($protobuf.roots.test_vector_tile = {});

$root.vector_tile = (function() {

    /**
     * Namespace vector_tile.
     * @exports vector_tile
     * @namespace
     */
    var vector_tile = {};

    vector_tile.Tile = (function() {

        /**
         * Properties of a Tile.
         * @memberof vector_tile
         * @interface ITile
         * @property {Array.<vector_tile.Tile.ILayer>|null} [layers] Tile layers
         */

        /**
         * Constructs a new Tile.
         * @memberof vector_tile
         * @classdesc Represents a Tile.
         * @constructor
         * @param {vector_tile.ITile=} [properties] Properties to set
         */
        function Tile(properties) {
            this.layers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Tile layers.
         * @member {Array.<vector_tile.Tile.ILayer>} layers
         * @memberof vector_tile.Tile
         * @instance
         */
        Tile.prototype.layers = $util.emptyArray;

        /**
         * Creates a new Tile instance using the specified properties.
         * @function create
         * @memberof vector_tile.Tile
         * @static
         * @param {vector_tile.ITile=} [properties] Properties to set
         * @returns {vector_tile.Tile} Tile instance
         */
        Tile.create = function create(properties) {
            return new Tile(properties);
        };

        /**
         * Encodes the specified Tile message. Does not implicitly {@link vector_tile.Tile.verify|verify} messages.
         * @function encode
         * @memberof vector_tile.Tile
         * @static
         * @param {vector_tile.ITile} message Tile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.layers != null && message.layers.length)
                for (var i = 0; i < message.layers.length; ++i)
                    $root.vector_tile.Tile.Layer.encode(message.layers[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Tile message, length delimited. Does not implicitly {@link vector_tile.Tile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof vector_tile.Tile
         * @static
         * @param {vector_tile.ITile} message Tile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Tile message from the specified reader or buffer.
         * @function decode
         * @memberof vector_tile.Tile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {vector_tile.Tile} Tile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.vector_tile.Tile();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 3:
                    if (!(message.layers && message.layers.length))
                        message.layers = [];
                    message.layers.push($root.vector_tile.Tile.Layer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Tile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof vector_tile.Tile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {vector_tile.Tile} Tile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Tile message.
         * @function verify
         * @memberof vector_tile.Tile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Tile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.layers != null && message.hasOwnProperty("layers")) {
                if (!Array.isArray(message.layers))
                    return "layers: array expected";
                for (var i = 0; i < message.layers.length; ++i) {
                    var error = $root.vector_tile.Tile.Layer.verify(message.layers[i]);
                    if (error)
                        return "layers." + error;
                }
            }
            return null;
        };

        /**
         * Object mapper - array values are:
         *   [
         *     required field
         *     repeated field
         *     field type - (a)rray, (m)ap, (e)num, (s)calar
         *     field name
         *     JavaScript scalar type
         *     enumById variable
         *     enumByName variable
         *   ]
         */
        Tile._getObjectMap = function _getObjectMap() {
            return [[
                    0,
                    1,
                    "Layer",
                    "layers",
                    "vector_tile.Tile.ILayer"
                ]];
        };

        /**
         * Creates a Tile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof vector_tile.Tile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {vector_tile.Tile} Tile
         */
        Tile.fromObject = function fromObject(object) {
            if (object instanceof $root.vector_tile.Tile)
                return object;
            return $root.objectMapper.toMessage(object, new $root.vector_tile.Tile(), $root.vector_tile.Tile._getObjectMap());
        };

        /**
         * Creates a plain object from a Tile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof vector_tile.Tile
         * @static
         * @param {vector_tile.Tile} message Tile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Tile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            return $root.objectMapper.toObject(message, options, $root.vector_tile.Tile._getObjectMap());
        };

        /**
         * Converts this Tile to JSON.
         * @function toJSON
         * @memberof vector_tile.Tile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Tile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * GeomType enum.
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} POINT=1 POINT value
         * @property {number} LINESTRING=2 LINESTRING value
         * @property {number} POLYGON=3 POLYGON value
         */
        Tile.GeomType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "POINT"] = 1;
            values[valuesById[2] = "LINESTRING"] = 2;
            values[valuesById[3] = "POLYGON"] = 3;
            return values;
        })();

        Tile.Value = (function() {

            /**
             * Properties of a Value.
             * @memberof vector_tile.Tile
             * @interface IValue
             * @property {string|null} [stringValue] Value stringValue
             * @property {number|null} [floatValue] Value floatValue
             * @property {number|null} [doubleValue] Value doubleValue
             * @property {number|Long|null} [intValue] Value intValue
             * @property {number|Long|null} [uintValue] Value uintValue
             * @property {number|Long|null} [sintValue] Value sintValue
             * @property {boolean|null} [boolValue] Value boolValue
             */

            /**
             * Constructs a new Value.
             * @memberof vector_tile.Tile
             * @classdesc Represents a Value.
             * @constructor
             * @param {vector_tile.Tile.IValue=} [properties] Properties to set
             */
            function Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Value stringValue.
             * @member {string} stringValue
             * @memberof vector_tile.Tile.Value
             * @instance
             */
            Value.prototype.stringValue = "";

            /**
             * Value floatValue.
             * @member {number} floatValue
             * @memberof vector_tile.Tile.Value
             * @instance
             */
            Value.prototype.floatValue = 0;

            /**
             * Value doubleValue.
             * @member {number} doubleValue
             * @memberof vector_tile.Tile.Value
             * @instance
             */
            Value.prototype.doubleValue = 0;

            /**
             * Value intValue.
             * @member {number|Long} intValue
             * @memberof vector_tile.Tile.Value
             * @instance
             */
            Value.prototype.intValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Value uintValue.
             * @member {number|Long} uintValue
             * @memberof vector_tile.Tile.Value
             * @instance
             */
            Value.prototype.uintValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Value sintValue.
             * @member {number|Long} sintValue
             * @memberof vector_tile.Tile.Value
             * @instance
             */
            Value.prototype.sintValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Value boolValue.
             * @member {boolean} boolValue
             * @memberof vector_tile.Tile.Value
             * @instance
             */
            Value.prototype.boolValue = false;

            /**
             * Creates a new Value instance using the specified properties.
             * @function create
             * @memberof vector_tile.Tile.Value
             * @static
             * @param {vector_tile.Tile.IValue=} [properties] Properties to set
             * @returns {vector_tile.Tile.Value} Value instance
             */
            Value.create = function create(properties) {
                return new Value(properties);
            };

            /**
             * Encodes the specified Value message. Does not implicitly {@link vector_tile.Tile.Value.verify|verify} messages.
             * @function encode
             * @memberof vector_tile.Tile.Value
             * @static
             * @param {vector_tile.Tile.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.stringValue);
                if (message.floatValue != null && message.hasOwnProperty("floatValue"))
                    writer.uint32(/* id 2, wireType 5 =*/21).float(message.floatValue);
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.doubleValue);
                if (message.intValue != null && message.hasOwnProperty("intValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.intValue);
                if (message.uintValue != null && message.hasOwnProperty("uintValue"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.uintValue);
                if (message.sintValue != null && message.hasOwnProperty("sintValue"))
                    writer.uint32(/* id 6, wireType 0 =*/48).sint64(message.sintValue);
                if (message.boolValue != null && message.hasOwnProperty("boolValue"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.boolValue);
                return writer;
            };

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link vector_tile.Tile.Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof vector_tile.Tile.Value
             * @static
             * @param {vector_tile.Tile.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @function decode
             * @memberof vector_tile.Tile.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {vector_tile.Tile.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.vector_tile.Tile.Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.stringValue = reader.string();
                        break;
                    case 2:
                        message.floatValue = reader.float();
                        break;
                    case 3:
                        message.doubleValue = reader.double();
                        break;
                    case 4:
                        message.intValue = reader.int64();
                        break;
                    case 5:
                        message.uintValue = reader.uint64();
                        break;
                    case 6:
                        message.sintValue = reader.sint64();
                        break;
                    case 7:
                        message.boolValue = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof vector_tile.Tile.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {vector_tile.Tile.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Value message.
             * @function verify
             * @memberof vector_tile.Tile.Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    if (!$util.isString(message.stringValue))
                        return "stringValue: string expected";
                if (message.floatValue != null && message.hasOwnProperty("floatValue"))
                    if (typeof message.floatValue !== "number")
                        return "floatValue: number expected";
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    if (typeof message.doubleValue !== "number")
                        return "doubleValue: number expected";
                if (message.intValue != null && message.hasOwnProperty("intValue"))
                    if (!$util.isInteger(message.intValue) && !(message.intValue && $util.isInteger(message.intValue.low) && $util.isInteger(message.intValue.high)))
                        return "intValue: integer|Long expected";
                if (message.uintValue != null && message.hasOwnProperty("uintValue"))
                    if (!$util.isInteger(message.uintValue) && !(message.uintValue && $util.isInteger(message.uintValue.low) && $util.isInteger(message.uintValue.high)))
                        return "uintValue: integer|Long expected";
                if (message.sintValue != null && message.hasOwnProperty("sintValue"))
                    if (!$util.isInteger(message.sintValue) && !(message.sintValue && $util.isInteger(message.sintValue.low) && $util.isInteger(message.sintValue.high)))
                        return "sintValue: integer|Long expected";
                if (message.boolValue != null && message.hasOwnProperty("boolValue"))
                    if (typeof message.boolValue !== "boolean")
                        return "boolValue: boolean expected";
                return null;
            };

            /**
             * Object mapper - array values are:
             *   [
             *     required field
             *     repeated field
             *     field type - (a)rray, (m)ap, (e)num, (s)calar
             *     field name
             *     JavaScript scalar type
             *     enumById variable
             *     enumByName variable
             *   ]
             */
            Value._getObjectMap = function _getObjectMap() {
                return [
                    [
                        0,
                        0,
                        "s",
                        "stringValue",
                        "string"
                    ],
                    [
                        0,
                        0,
                        "s",
                        "floatValue",
                        "number"
                    ],
                    [
                        0,
                        0,
                        "s",
                        "doubleValue",
                        "number"
                    ],
                    [
                        0,
                        0,
                        "s",
                        "intValue",
                        "number|Long"
                    ],
                    [
                        0,
                        0,
                        "s",
                        "uintValue",
                        "number|Long"
                    ],
                    [
                        0,
                        0,
                        "s",
                        "sintValue",
                        "number|Long"
                    ],
                    [
                        0,
                        0,
                        "s",
                        "boolValue",
                        "boolean"
                    ]
                ];
            };

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof vector_tile.Tile.Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {vector_tile.Tile.Value} Value
             */
            Value.fromObject = function fromObject(object) {
                if (object instanceof $root.vector_tile.Tile.Value)
                    return object;
                return $root.objectMapper.toMessage(object, new $root.vector_tile.Tile.Value(), $root.vector_tile.Tile.Value._getObjectMap());
            };

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof vector_tile.Tile.Value
             * @static
             * @param {vector_tile.Tile.Value} message Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                return $root.objectMapper.toObject(message, options, $root.vector_tile.Tile.Value._getObjectMap());
            };

            /**
             * Converts this Value to JSON.
             * @function toJSON
             * @memberof vector_tile.Tile.Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Value;
        })();

        Tile.Feature = (function() {

            /**
             * Properties of a Feature.
             * @memberof vector_tile.Tile
             * @interface IFeature
             * @property {number|Long|null} [id] Feature id
             * @property {Array.<number>|null} [tags] Feature tags
             * @property {vector_tile.Tile.GeomType|null} [type] Feature type
             * @property {Array.<number>|null} [geometry] Feature geometry
             */

            /**
             * Constructs a new Feature.
             * @memberof vector_tile.Tile
             * @classdesc Represents a Feature.
             * @constructor
             * @param {vector_tile.Tile.IFeature=} [properties] Properties to set
             */
            function Feature(properties) {
                this.tags = [];
                this.geometry = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Feature id.
             * @member {number|Long} id
             * @memberof vector_tile.Tile.Feature
             * @instance
             */
            Feature.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Feature tags.
             * @member {Array.<number>} tags
             * @memberof vector_tile.Tile.Feature
             * @instance
             */
            Feature.prototype.tags = $util.emptyArray;

            /**
             * Feature type.
             * @member {vector_tile.Tile.GeomType} type
             * @memberof vector_tile.Tile.Feature
             * @instance
             */
            Feature.prototype.type = 0;

            /**
             * Feature geometry.
             * @member {Array.<number>} geometry
             * @memberof vector_tile.Tile.Feature
             * @instance
             */
            Feature.prototype.geometry = $util.emptyArray;

            /**
             * Creates a new Feature instance using the specified properties.
             * @function create
             * @memberof vector_tile.Tile.Feature
             * @static
             * @param {vector_tile.Tile.IFeature=} [properties] Properties to set
             * @returns {vector_tile.Tile.Feature} Feature instance
             */
            Feature.create = function create(properties) {
                return new Feature(properties);
            };

            /**
             * Encodes the specified Feature message. Does not implicitly {@link vector_tile.Tile.Feature.verify|verify} messages.
             * @function encode
             * @memberof vector_tile.Tile.Feature
             * @static
             * @param {vector_tile.Tile.IFeature} message Feature message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Feature.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
                if (message.tags != null && message.tags.length) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork();
                    for (var i = 0; i < message.tags.length; ++i)
                        writer.uint32(message.tags[i]);
                    writer.ldelim();
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
                if (message.geometry != null && message.geometry.length) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork();
                    for (var i = 0; i < message.geometry.length; ++i)
                        writer.uint32(message.geometry[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified Feature message, length delimited. Does not implicitly {@link vector_tile.Tile.Feature.verify|verify} messages.
             * @function encodeDelimited
             * @memberof vector_tile.Tile.Feature
             * @static
             * @param {vector_tile.Tile.IFeature} message Feature message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Feature.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Feature message from the specified reader or buffer.
             * @function decode
             * @memberof vector_tile.Tile.Feature
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {vector_tile.Tile.Feature} Feature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Feature.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.vector_tile.Tile.Feature();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.uint64();
                        break;
                    case 2:
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.tags.push(reader.uint32());
                        } else
                            message.tags.push(reader.uint32());
                        break;
                    case 3:
                        message.type = reader.int32();
                        break;
                    case 4:
                        if (!(message.geometry && message.geometry.length))
                            message.geometry = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.geometry.push(reader.uint32());
                        } else
                            message.geometry.push(reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Feature message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof vector_tile.Tile.Feature
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {vector_tile.Tile.Feature} Feature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Feature.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Feature message.
             * @function verify
             * @memberof vector_tile.Tile.Feature
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Feature.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                        return "id: integer|Long expected";
                if (message.tags != null && message.hasOwnProperty("tags")) {
                    if (!Array.isArray(message.tags))
                        return "tags: array expected";
                    for (var i = 0; i < message.tags.length; ++i)
                        if (!$util.isInteger(message.tags[i]))
                            return "tags: integer[] expected";
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.geometry != null && message.hasOwnProperty("geometry")) {
                    if (!Array.isArray(message.geometry))
                        return "geometry: array expected";
                    for (var i = 0; i < message.geometry.length; ++i)
                        if (!$util.isInteger(message.geometry[i]))
                            return "geometry: integer[] expected";
                }
                return null;
            };

            /**
             * Object mapper - array values are:
             *   [
             *     required field
             *     repeated field
             *     field type - (a)rray, (m)ap, (e)num, (s)calar
             *     field name
             *     JavaScript scalar type
             *     enumById variable
             *     enumByName variable
             *   ]
             */
            Feature._getObjectMap = function _getObjectMap() {
                var GeomTypeById = {
                    0: "UNKNOWN",
                    1: "POINT",
                    2: "LINESTRING",
                    3: "POLYGON"
                };
                var GeomTypeByName = {
                    UNKNOWN: 0,
                    POINT: 1,
                    LINESTRING: 2,
                    POLYGON: 3
                };
                return [
                    [
                        0,
                        0,
                        "s",
                        "id",
                        "number|Long"
                    ],
                    [
                        0,
                        1,
                        "s",
                        "tags",
                        "number"
                    ],
                    [
                        0,
                        0,
                        "e",
                        "type",
                        vector_tile.Tile.GeomType,
                        GeomTypeById,
                        GeomTypeByName
                    ],
                    [
                        0,
                        1,
                        "s",
                        "geometry",
                        "number"
                    ]
                ];
            };

            /**
             * Creates a Feature message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof vector_tile.Tile.Feature
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {vector_tile.Tile.Feature} Feature
             */
            Feature.fromObject = function fromObject(object) {
                if (object instanceof $root.vector_tile.Tile.Feature)
                    return object;
                return $root.objectMapper.toMessage(object, new $root.vector_tile.Tile.Feature(), $root.vector_tile.Tile.Feature._getObjectMap());
            };

            /**
             * Creates a plain object from a Feature message. Also converts values to other types if specified.
             * @function toObject
             * @memberof vector_tile.Tile.Feature
             * @static
             * @param {vector_tile.Tile.Feature} message Feature
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Feature.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                return $root.objectMapper.toObject(message, options, $root.vector_tile.Tile.Feature._getObjectMap());
            };

            /**
             * Converts this Feature to JSON.
             * @function toJSON
             * @memberof vector_tile.Tile.Feature
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Feature.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Feature;
        })();

        Tile.Layer = (function() {

            /**
             * Properties of a Layer.
             * @memberof vector_tile.Tile
             * @interface ILayer
             * @property {number} version Layer version
             * @property {string} name Layer name
             * @property {Array.<vector_tile.Tile.IFeature>|null} [features] Layer features
             * @property {Array.<string>|null} [keys] Layer keys
             * @property {Array.<vector_tile.Tile.IValue>|null} [values] Layer values
             * @property {number|null} [extent] Layer extent
             */

            /**
             * Constructs a new Layer.
             * @memberof vector_tile.Tile
             * @classdesc Represents a Layer.
             * @constructor
             * @param {vector_tile.Tile.ILayer=} [properties] Properties to set
             */
            function Layer(properties) {
                this.features = [];
                this.keys = [];
                this.values = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Layer version.
             * @member {number} version
             * @memberof vector_tile.Tile.Layer
             * @instance
             */
            Layer.prototype.version = 1;

            /**
             * Layer name.
             * @member {string} name
             * @memberof vector_tile.Tile.Layer
             * @instance
             */
            Layer.prototype.name = "";

            /**
             * Layer features.
             * @member {Array.<vector_tile.Tile.IFeature>} features
             * @memberof vector_tile.Tile.Layer
             * @instance
             */
            Layer.prototype.features = $util.emptyArray;

            /**
             * Layer keys.
             * @member {Array.<string>} keys
             * @memberof vector_tile.Tile.Layer
             * @instance
             */
            Layer.prototype.keys = $util.emptyArray;

            /**
             * Layer values.
             * @member {Array.<vector_tile.Tile.IValue>} values
             * @memberof vector_tile.Tile.Layer
             * @instance
             */
            Layer.prototype.values = $util.emptyArray;

            /**
             * Layer extent.
             * @member {number} extent
             * @memberof vector_tile.Tile.Layer
             * @instance
             */
            Layer.prototype.extent = 4096;

            /**
             * Creates a new Layer instance using the specified properties.
             * @function create
             * @memberof vector_tile.Tile.Layer
             * @static
             * @param {vector_tile.Tile.ILayer=} [properties] Properties to set
             * @returns {vector_tile.Tile.Layer} Layer instance
             */
            Layer.create = function create(properties) {
                return new Layer(properties);
            };

            /**
             * Encodes the specified Layer message. Does not implicitly {@link vector_tile.Tile.Layer.verify|verify} messages.
             * @function encode
             * @memberof vector_tile.Tile.Layer
             * @static
             * @param {vector_tile.Tile.ILayer} message Layer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Layer.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.features != null && message.features.length)
                    for (var i = 0; i < message.features.length; ++i)
                        $root.vector_tile.Tile.Feature.encode(message.features[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.keys != null && message.keys.length)
                    for (var i = 0; i < message.keys.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.keys[i]);
                if (message.values != null && message.values.length)
                    for (var i = 0; i < message.values.length; ++i)
                        $root.vector_tile.Tile.Value.encode(message.values[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.extent != null && message.hasOwnProperty("extent"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.extent);
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.version);
                return writer;
            };

            /**
             * Encodes the specified Layer message, length delimited. Does not implicitly {@link vector_tile.Tile.Layer.verify|verify} messages.
             * @function encodeDelimited
             * @memberof vector_tile.Tile.Layer
             * @static
             * @param {vector_tile.Tile.ILayer} message Layer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Layer.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Layer message from the specified reader or buffer.
             * @function decode
             * @memberof vector_tile.Tile.Layer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {vector_tile.Tile.Layer} Layer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Layer.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.vector_tile.Tile.Layer();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 15:
                        message.version = reader.uint32();
                        break;
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.features && message.features.length))
                            message.features = [];
                        message.features.push($root.vector_tile.Tile.Feature.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.keys && message.keys.length))
                            message.keys = [];
                        message.keys.push(reader.string());
                        break;
                    case 4:
                        if (!(message.values && message.values.length))
                            message.values = [];
                        message.values.push($root.vector_tile.Tile.Value.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        message.extent = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("version"))
                    throw $util.ProtocolError("missing required 'version'", { instance: message });
                if (!message.hasOwnProperty("name"))
                    throw $util.ProtocolError("missing required 'name'", { instance: message });
                return message;
            };

            /**
             * Decodes a Layer message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof vector_tile.Tile.Layer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {vector_tile.Tile.Layer} Layer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Layer.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Layer message.
             * @function verify
             * @memberof vector_tile.Tile.Layer
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Layer.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
                if (!$util.isString(message.name))
                    return "name: string expected";
                if (message.features != null && message.hasOwnProperty("features")) {
                    if (!Array.isArray(message.features))
                        return "features: array expected";
                    for (var i = 0; i < message.features.length; ++i) {
                        var error = $root.vector_tile.Tile.Feature.verify(message.features[i]);
                        if (error)
                            return "features." + error;
                    }
                }
                if (message.keys != null && message.hasOwnProperty("keys")) {
                    if (!Array.isArray(message.keys))
                        return "keys: array expected";
                    for (var i = 0; i < message.keys.length; ++i)
                        if (!$util.isString(message.keys[i]))
                            return "keys: string[] expected";
                }
                if (message.values != null && message.hasOwnProperty("values")) {
                    if (!Array.isArray(message.values))
                        return "values: array expected";
                    for (var i = 0; i < message.values.length; ++i) {
                        var error = $root.vector_tile.Tile.Value.verify(message.values[i]);
                        if (error)
                            return "values." + error;
                    }
                }
                if (message.extent != null && message.hasOwnProperty("extent"))
                    if (!$util.isInteger(message.extent))
                        return "extent: integer expected";
                return null;
            };

            /**
             * Object mapper - array values are:
             *   [
             *     required field
             *     repeated field
             *     field type - (a)rray, (m)ap, (e)num, (s)calar
             *     field name
             *     JavaScript scalar type
             *     enumById variable
             *     enumByName variable
             *   ]
             */
            Layer._getObjectMap = function _getObjectMap() {
                return [
                    [
                        1,
                        0,
                        "s",
                        "version",
                        "number"
                    ],
                    [
                        1,
                        0,
                        "s",
                        "name",
                        "string"
                    ],
                    [
                        0,
                        1,
                        "Feature",
                        "features",
                        "vector_tile.Tile.IFeature"
                    ],
                    [
                        0,
                        1,
                        "s",
                        "keys",
                        "string"
                    ],
                    [
                        0,
                        1,
                        "Value",
                        "values",
                        "vector_tile.Tile.IValue"
                    ],
                    [
                        0,
                        0,
                        "s",
                        "extent",
                        "number"
                    ]
                ];
            };

            /**
             * Creates a Layer message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof vector_tile.Tile.Layer
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {vector_tile.Tile.Layer} Layer
             */
            Layer.fromObject = function fromObject(object) {
                if (object instanceof $root.vector_tile.Tile.Layer)
                    return object;
                return $root.objectMapper.toMessage(object, new $root.vector_tile.Tile.Layer(), $root.vector_tile.Tile.Layer._getObjectMap());
            };

            /**
             * Creates a plain object from a Layer message. Also converts values to other types if specified.
             * @function toObject
             * @memberof vector_tile.Tile.Layer
             * @static
             * @param {vector_tile.Tile.Layer} message Layer
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Layer.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                return $root.objectMapper.toObject(message, options, $root.vector_tile.Tile.Layer._getObjectMap());
            };

            /**
             * Converts this Layer to JSON.
             * @function toJSON
             * @memberof vector_tile.Tile.Layer
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Layer.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Layer;
        })();

        return Tile;
    })();

    return vector_tile;
})();