/*
 * TIELIN
 * Tech is evil Love is not
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Tielin) {
      root.Tielin = {};
    }
    root.Tielin.PickupLines = factory(root.Tielin.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PickupLines model module.
   * @module model/PickupLines
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PickupLines</code>.
   *         
   * @alias module:model/PickupLines
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PickupLines</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PickupLines} obj Optional instance to populate.
   * @return {module:model/PickupLines} The populated <code>PickupLines</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('player_id'))
        obj.playerId = ApiClient.convertToType(data['player_id'], 'Number');
      if (data.hasOwnProperty('round_num'))
        obj.roundNum = ApiClient.convertToType(data['round_num'], 'Number');
      if (data.hasOwnProperty('earned_swipes_left'))
        obj.earnedSwipesLeft = ApiClient.convertToType(data['earned_swipes_left'], 'String');
      if (data.hasOwnProperty('earned_swipes_right'))
        obj.earnedSwipesRight = ApiClient.convertToType(data['earned_swipes_right'], 'String');
      if (data.hasOwnProperty('human_words'))
        obj.humanWords = ApiClient.convertToType(data['human_words'], 'String');
      if (data.hasOwnProperty('robot_words'))
        obj.robotWords = ApiClient.convertToType(data['robot_words'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} playerId
   */
  exports.prototype.playerId = undefined;

  /**
   * @member {Number} roundNum
   */
  exports.prototype.roundNum = undefined;

  /**
   * @member {String} earnedSwipesLeft
   */
  exports.prototype.earnedSwipesLeft = undefined;

  /**
   * @member {String} earnedSwipesRight
   */
  exports.prototype.earnedSwipesRight = undefined;

  /**
   * @member {String} humanWords
   */
  exports.prototype.humanWords = undefined;

  /**
   * @member {String} robotWords
   */
  exports.prototype.robotWords = undefined;

  return exports;

}));
