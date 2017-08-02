// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.test_convert || ($protobuf.roots.test_convert = {});

$root.Message = (function() {

    /**
     * Properties of a Message.
     * @exports IMessage
     * @interface IMessage
     * @property {string|null} [stringVal] Message stringVal
     * @property {Array.<string>|null} [stringRepeated] Message stringRepeated
     * @property {number|Long|null} [uint64Val] Message uint64Val
     * @property {Array.<number|Long>|null} [uint64Repeated] Message uint64Repeated
     * @property {Uint8Array|null} [bytesVal] Message bytesVal
     * @property {Array.<Uint8Array>|null} [bytesRepeated] Message bytesRepeated
     * @property {Message.SomeEnum|null} [enumVal] Message enumVal
     * @property {Array.<Message.SomeEnum>|null} [enumRepeated] Message enumRepeated
     * @property {Object.<string,number|Long>|null} [int64Map] Message int64Map
     */

    /**
     * Constructs a new Message.
     * @exports Message
     * @classdesc Represents a Message.
     * @constructor
     * @param {IMessage=} [properties] Properties to set
     */
    function Message(properties) {
        this.stringRepeated = [];
        this.uint64Repeated = [];
        this.bytesRepeated = [];
        this.enumRepeated = [];
        this.int64Map = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Message stringVal.
     * @member {string} stringVal
     * @memberof Message
     * @instance
     */
    Message.prototype.stringVal = "";

    /**
     * Message stringRepeated.
     * @member {Array.<string>} stringRepeated
     * @memberof Message
     * @instance
     */
    Message.prototype.stringRepeated = $util.emptyArray;

    /**
     * Message uint64Val.
     * @member {number|Long} uint64Val
     * @memberof Message
     * @instance
     */
    Message.prototype.uint64Val = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Message uint64Repeated.
     * @member {Array.<number|Long>} uint64Repeated
     * @memberof Message
     * @instance
     */
    Message.prototype.uint64Repeated = $util.emptyArray;

    /**
     * Message bytesVal.
     * @member {Uint8Array} bytesVal
     * @memberof Message
     * @instance
     */
    Message.prototype.bytesVal = $util.newBuffer([]);

    /**
     * Message bytesRepeated.
     * @member {Array.<Uint8Array>} bytesRepeated
     * @memberof Message
     * @instance
     */
    Message.prototype.bytesRepeated = $util.emptyArray;

    /**
     * Message enumVal.
     * @member {Message.SomeEnum} enumVal
     * @memberof Message
     * @instance
     */
    Message.prototype.enumVal = 1;

    /**
     * Message enumRepeated.
     * @member {Array.<Message.SomeEnum>} enumRepeated
     * @memberof Message
     * @instance
     */
    Message.prototype.enumRepeated = $util.emptyArray;

    /**
     * Message int64Map.
     * @member {Object.<string,number|Long>} int64Map
     * @memberof Message
     * @instance
     */
    Message.prototype.int64Map = $util.emptyObject;

    /**
     * Creates a new Message instance using the specified properties.
     * @function create
     * @memberof Message
     * @static
     * @param {IMessage=} [properties] Properties to set
     * @returns {Message} Message instance
     */
    Message.create = function create(properties) {
        return new Message(properties);
    };

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @function encode
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.stringVal != null && message.hasOwnProperty("stringVal"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.stringVal);
        if (message.stringRepeated != null && message.stringRepeated.length)
            for (var i = 0; i < message.stringRepeated.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.stringRepeated[i]);
        if (message.uint64Val != null && message.hasOwnProperty("uint64Val"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.uint64Val);
        if (message.uint64Repeated != null && message.uint64Repeated.length) {
            writer.uint32(/* id 4, wireType 2 =*/34).fork();
            for (var i = 0; i < message.uint64Repeated.length; ++i)
                writer.uint64(message.uint64Repeated[i]);
            writer.ldelim();
        }
        if (message.bytesVal != null && message.hasOwnProperty("bytesVal"))
            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.bytesVal);
        if (message.bytesRepeated != null && message.bytesRepeated.length)
            for (var i = 0; i < message.bytesRepeated.length; ++i)
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.bytesRepeated[i]);
        if (message.enumVal != null && message.hasOwnProperty("enumVal"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.enumVal);
        if (message.enumRepeated != null && message.enumRepeated.length) {
            writer.uint32(/* id 8, wireType 2 =*/66).fork();
            for (var i = 0; i < message.enumRepeated.length; ++i)
                writer.int32(message.enumRepeated[i]);
            writer.ldelim();
        }
        if (message.int64Map != null && message.hasOwnProperty("int64Map"))
            for (var keys = Object.keys(message.int64Map), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 9, wireType 2 =*/74).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.int64Map[keys[i]]).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @function decode
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message(), key;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.stringVal = reader.string();
                break;
            case 2:
                if (!(message.stringRepeated && message.stringRepeated.length))
                    message.stringRepeated = [];
                message.stringRepeated.push(reader.string());
                break;
            case 3:
                message.uint64Val = reader.uint64();
                break;
            case 4:
                if (!(message.uint64Repeated && message.uint64Repeated.length))
                    message.uint64Repeated = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.uint64Repeated.push(reader.uint64());
                } else
                    message.uint64Repeated.push(reader.uint64());
                break;
            case 5:
                message.bytesVal = reader.bytes();
                break;
            case 6:
                if (!(message.bytesRepeated && message.bytesRepeated.length))
                    message.bytesRepeated = [];
                message.bytesRepeated.push(reader.bytes());
                break;
            case 7:
                message.enumVal = reader.int32();
                break;
            case 8:
                if (!(message.enumRepeated && message.enumRepeated.length))
                    message.enumRepeated = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.enumRepeated.push(reader.int32());
                } else
                    message.enumRepeated.push(reader.int32());
                break;
            case 9:
                reader.skip().pos++;
                if (message.int64Map === $util.emptyObject)
                    message.int64Map = {};
                key = reader.string();
                reader.pos++;
                message.int64Map[key] = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Message message.
     * @function verify
     * @memberof Message
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Message.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.stringVal != null && message.hasOwnProperty("stringVal"))
            if (!$util.isString(message.stringVal))
                return "stringVal: string expected";
        if (message.stringRepeated != null && message.hasOwnProperty("stringRepeated")) {
            if (!Array.isArray(message.stringRepeated))
                return "stringRepeated: array expected";
            for (var i = 0; i < message.stringRepeated.length; ++i)
                if (!$util.isString(message.stringRepeated[i]))
                    return "stringRepeated: string[] expected";
        }
        if (message.uint64Val != null && message.hasOwnProperty("uint64Val"))
            if (!$util.isInteger(message.uint64Val) && !(message.uint64Val && $util.isInteger(message.uint64Val.low) && $util.isInteger(message.uint64Val.high)))
                return "uint64Val: integer|Long expected";
        if (message.uint64Repeated != null && message.hasOwnProperty("uint64Repeated")) {
            if (!Array.isArray(message.uint64Repeated))
                return "uint64Repeated: array expected";
            for (var i = 0; i < message.uint64Repeated.length; ++i)
                if (!$util.isInteger(message.uint64Repeated[i]) && !(message.uint64Repeated[i] && $util.isInteger(message.uint64Repeated[i].low) && $util.isInteger(message.uint64Repeated[i].high)))
                    return "uint64Repeated: integer|Long[] expected";
        }
        if (message.bytesVal != null && message.hasOwnProperty("bytesVal"))
            if (!(message.bytesVal && typeof message.bytesVal.length === "number" || $util.isString(message.bytesVal)))
                return "bytesVal: buffer expected";
        if (message.bytesRepeated != null && message.hasOwnProperty("bytesRepeated")) {
            if (!Array.isArray(message.bytesRepeated))
                return "bytesRepeated: array expected";
            for (var i = 0; i < message.bytesRepeated.length; ++i)
                if (!(message.bytesRepeated[i] && typeof message.bytesRepeated[i].length === "number" || $util.isString(message.bytesRepeated[i])))
                    return "bytesRepeated: buffer[] expected";
        }
        if (message.enumVal != null && message.hasOwnProperty("enumVal"))
            switch (message.enumVal) {
            default:
                return "enumVal: enum value expected";
            case 1:
            case 2:
                break;
            }
        if (message.enumRepeated != null && message.hasOwnProperty("enumRepeated")) {
            if (!Array.isArray(message.enumRepeated))
                return "enumRepeated: array expected";
            for (var i = 0; i < message.enumRepeated.length; ++i)
                switch (message.enumRepeated[i]) {
                default:
                    return "enumRepeated: enum value[] expected";
                case 1:
                case 2:
                    break;
                }
        }
        if (message.int64Map != null && message.hasOwnProperty("int64Map")) {
            if (!$util.isObject(message.int64Map))
                return "int64Map: object expected";
            var key = Object.keys(message.int64Map);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isInteger(message.int64Map[key[i]]) && !(message.int64Map[key[i]] && $util.isInteger(message.int64Map[key[i]].low) && $util.isInteger(message.int64Map[key[i]].high)))
                    return "int64Map: integer|Long{k:string} expected";
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
    Message._getObjectMap = function _getObjectMap() {
        var SomeEnumById = {
            1: "ONE",
            2: "TWO"
        };
        var SomeEnumByName = {
            ONE: 1,
            TWO: 2
        };
        return [
            [
                0,
                0,
                "s",
                "stringVal",
                "string"
            ],
            [
                0,
                1,
                "s",
                "stringRepeated",
                "string"
            ],
            [
                0,
                0,
                "s",
                "uint64Val",
                "number|Long"
            ],
            [
                0,
                1,
                "s",
                "uint64Repeated",
                "number|Long"
            ],
            [
                0,
                0,
                "a",
                "bytesVal",
                "Uint8Array"
            ],
            [
                0,
                1,
                "a",
                "bytesRepeated",
                "Uint8Array"
            ],
            [
                0,
                0,
                "e",
                "enumVal",
                Message.SomeEnum,
                SomeEnumById,
                SomeEnumByName
            ],
            [
                0,
                1,
                "e",
                "enumRepeated",
                Message.SomeEnum,
                SomeEnumById,
                SomeEnumByName
            ],
            [
                0,
                0,
                "m",
                "int64Map",
                "number|Long"
            ]
        ];
    };

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Message
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message
     */
    Message.fromObject = function fromObject(object) {
        if (object instanceof $root.Message)
            return object;
        return $root.objectMapper.toMessage(object, new $root.Message(), $root.Message._getObjectMap());
    };

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Message
     * @static
     * @param {Message} message Message
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Message.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        return $root.objectMapper.toObject(message, options, $root.Message._getObjectMap());
    };

    /**
     * Converts this Message to JSON.
     * @function toJSON
     * @memberof Message
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Message.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * SomeEnum enum.
     * @enum {string}
     * @property {number} ONE=1 ONE value
     * @property {number} TWO=2 TWO value
     */
    Message.SomeEnum = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "ONE"] = 1;
        values[valuesById[2] = "TWO"] = 2;
        return values;
    })();

    return Message;
})();