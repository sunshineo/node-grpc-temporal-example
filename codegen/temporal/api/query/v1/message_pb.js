// source: temporal/api/query/v1/message.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var temporal_api_enums_v1_query_pb = require('../../../../temporal/api/enums/v1/query_pb.js');
goog.object.extend(proto, temporal_api_enums_v1_query_pb);
var temporal_api_enums_v1_workflow_pb = require('../../../../temporal/api/enums/v1/workflow_pb.js');
goog.object.extend(proto, temporal_api_enums_v1_workflow_pb);
var temporal_api_common_v1_message_pb = require('../../../../temporal/api/common/v1/message_pb.js');
goog.object.extend(proto, temporal_api_common_v1_message_pb);
goog.exportSymbol('proto.temporal.api.query.v1.QueryRejected', null, global);
goog.exportSymbol('proto.temporal.api.query.v1.WorkflowQuery', null, global);
goog.exportSymbol('proto.temporal.api.query.v1.WorkflowQueryResult', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.query.v1.WorkflowQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.query.v1.WorkflowQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.temporal.api.query.v1.WorkflowQuery.displayName = 'proto.temporal.api.query.v1.WorkflowQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.query.v1.WorkflowQueryResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.query.v1.WorkflowQueryResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.temporal.api.query.v1.WorkflowQueryResult.displayName = 'proto.temporal.api.query.v1.WorkflowQueryResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temporal.api.query.v1.QueryRejected = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.query.v1.QueryRejected, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.temporal.api.query.v1.QueryRejected.displayName = 'proto.temporal.api.query.v1.QueryRejected';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.query.v1.WorkflowQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.query.v1.WorkflowQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.query.v1.WorkflowQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.query.v1.WorkflowQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    queryType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    queryArgs: (f = msg.getQueryArgs()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.query.v1.WorkflowQuery}
 */
proto.temporal.api.query.v1.WorkflowQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.query.v1.WorkflowQuery;
  return proto.temporal.api.query.v1.WorkflowQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.query.v1.WorkflowQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.query.v1.WorkflowQuery}
 */
proto.temporal.api.query.v1.WorkflowQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQueryType(value);
      break;
    case 2:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setQueryArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.query.v1.WorkflowQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.query.v1.WorkflowQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.query.v1.WorkflowQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.query.v1.WorkflowQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQueryType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQueryArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
};


/**
 * optional string query_type = 1;
 * @return {string}
 */
proto.temporal.api.query.v1.WorkflowQuery.prototype.getQueryType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.temporal.api.query.v1.WorkflowQuery} returns this
 */
proto.temporal.api.query.v1.WorkflowQuery.prototype.setQueryType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.Payloads query_args = 2;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.query.v1.WorkflowQuery.prototype.getQueryArgs = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 2));
};


/**
 * @param {?proto.temporal.api.common.v1.Payloads|undefined} value
 * @return {!proto.temporal.api.query.v1.WorkflowQuery} returns this
*/
proto.temporal.api.query.v1.WorkflowQuery.prototype.setQueryArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.temporal.api.query.v1.WorkflowQuery} returns this
 */
proto.temporal.api.query.v1.WorkflowQuery.prototype.clearQueryArgs = function() {
  return this.setQueryArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.temporal.api.query.v1.WorkflowQuery.prototype.hasQueryArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.query.v1.WorkflowQueryResult.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.query.v1.WorkflowQueryResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.query.v1.WorkflowQueryResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.query.v1.WorkflowQueryResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    answer: (f = msg.getAnswer()) && temporal_api_common_v1_message_pb.Payloads.toObject(includeInstance, f),
    errorMessage: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.query.v1.WorkflowQueryResult}
 */
proto.temporal.api.query.v1.WorkflowQueryResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.query.v1.WorkflowQueryResult;
  return proto.temporal.api.query.v1.WorkflowQueryResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.query.v1.WorkflowQueryResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.query.v1.WorkflowQueryResult}
 */
proto.temporal.api.query.v1.WorkflowQueryResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.temporal.api.enums.v1.QueryResultType} */ (reader.readEnum());
      msg.setResultType(value);
      break;
    case 2:
      var value = new temporal_api_common_v1_message_pb.Payloads;
      reader.readMessage(value,temporal_api_common_v1_message_pb.Payloads.deserializeBinaryFromReader);
      msg.setAnswer(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.query.v1.WorkflowQueryResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.query.v1.WorkflowQueryResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.query.v1.WorkflowQueryResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.query.v1.WorkflowQueryResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAnswer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      temporal_api_common_v1_message_pb.Payloads.serializeBinaryToWriter
    );
  }
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional temporal.api.enums.v1.QueryResultType result_type = 1;
 * @return {!proto.temporal.api.enums.v1.QueryResultType}
 */
proto.temporal.api.query.v1.WorkflowQueryResult.prototype.getResultType = function() {
  return /** @type {!proto.temporal.api.enums.v1.QueryResultType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.temporal.api.enums.v1.QueryResultType} value
 * @return {!proto.temporal.api.query.v1.WorkflowQueryResult} returns this
 */
proto.temporal.api.query.v1.WorkflowQueryResult.prototype.setResultType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional temporal.api.common.v1.Payloads answer = 2;
 * @return {?proto.temporal.api.common.v1.Payloads}
 */
proto.temporal.api.query.v1.WorkflowQueryResult.prototype.getAnswer = function() {
  return /** @type{?proto.temporal.api.common.v1.Payloads} */ (
    jspb.Message.getWrapperField(this, temporal_api_common_v1_message_pb.Payloads, 2));
};


/**
 * @param {?proto.temporal.api.common.v1.Payloads|undefined} value
 * @return {!proto.temporal.api.query.v1.WorkflowQueryResult} returns this
*/
proto.temporal.api.query.v1.WorkflowQueryResult.prototype.setAnswer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.temporal.api.query.v1.WorkflowQueryResult} returns this
 */
proto.temporal.api.query.v1.WorkflowQueryResult.prototype.clearAnswer = function() {
  return this.setAnswer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.temporal.api.query.v1.WorkflowQueryResult.prototype.hasAnswer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string error_message = 3;
 * @return {string}
 */
proto.temporal.api.query.v1.WorkflowQueryResult.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.temporal.api.query.v1.WorkflowQueryResult} returns this
 */
proto.temporal.api.query.v1.WorkflowQueryResult.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.query.v1.QueryRejected.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.query.v1.QueryRejected.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.query.v1.QueryRejected} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.query.v1.QueryRejected.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temporal.api.query.v1.QueryRejected}
 */
proto.temporal.api.query.v1.QueryRejected.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.query.v1.QueryRejected;
  return proto.temporal.api.query.v1.QueryRejected.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.query.v1.QueryRejected} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.query.v1.QueryRejected}
 */
proto.temporal.api.query.v1.QueryRejected.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.temporal.api.enums.v1.WorkflowExecutionStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temporal.api.query.v1.QueryRejected.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.query.v1.QueryRejected.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.query.v1.QueryRejected} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.query.v1.QueryRejected.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional temporal.api.enums.v1.WorkflowExecutionStatus status = 1;
 * @return {!proto.temporal.api.enums.v1.WorkflowExecutionStatus}
 */
proto.temporal.api.query.v1.QueryRejected.prototype.getStatus = function() {
  return /** @type {!proto.temporal.api.enums.v1.WorkflowExecutionStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.temporal.api.enums.v1.WorkflowExecutionStatus} value
 * @return {!proto.temporal.api.query.v1.QueryRejected} returns this
 */
proto.temporal.api.query.v1.QueryRejected.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


goog.object.extend(exports, proto.temporal.api.query.v1);
