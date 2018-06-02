const booleanEnum = {
  true: 'true',
  false: 'false'
}

const booleanTranslate = {
  [booleanEnum.true]: 'yes',
  [booleanEnum.false]: 'no',
  booleanError: 'not a boolean'
}

/**
 * @class BooleanHelper
 */
class BooleanHelper {
  constructor() {
    this.booleanValues = booleanTranslate
    this.i18n = null
  }

  /**
   *Set the string reference to boolean
   *
   * @memberof BooleanHelper
   * {
   *    true : 'yes',
   *    false: 'no',
   *    booleanError : 'not a boolean'
   * }
   */
  set culture(values) {
    this.booleanValues = Object.assign(booleanTranslate, values)
  }

  set usei18n(use) {
    if (use && !this.i18n) this.i18n = require('i18n')
  }

  _isTrueOrFalse(param, value) {
    switch (typeof param) {
      case 'boolean':
        return param === value
      case 'string':
        return (
          param.toLowerCase() === booleanEnum[value] ||
          param === (~~value).toString() ||
          (this.i18n === null &&
            param.toLowerCase() ===
              this.booleanValues[booleanEnum[value]].toLowerCase()) ||
          (this.i18n !== null &&
            param.toLowerCase() ===
              this.i18n.__(booleanEnum[value]).toLowerCase())
        )

      case 'number':
        return param === ~~value
    }
    throw booleanTranslate.booleanError
  }
  /**
   * Checks if a Boolean value is true, handling null by returning false.
   * @param {object} param any object
   * @returns {boolean} that boolean
   */
  isTrue(param) {
    return this._isTrueOrFalse(param, true)
  }

  /**
   * Checks if a Boolean value is not true, handling null by returning false.
   * @param {object} param any object
   * @returns {boolean} that boolean
   */
  isNotTrue(param) {
    return !this._isTrueOrFalse(param, true)
  }

  /**
   * Checks if a Boolean value is false, handling null by returning false.
   * @param {object} param any object
   * @returns {boolean} that boolean
   */
  isFalse(param) {
    return this._isTrueOrFalse(param, false)
  }

  /**
   * Checks if a Boolean value is not false, handling null by returning false.
   * @param {object} param any object
   * @returns {boolean} that boolean
   */
  isNotFalse(param) {
    return !this._isTrueOrFalse(param, false)
  }
  /**
   *  Negates the specified boolean.
   * @param {object} param any object
   */
  negate(param) {
    return !this._isTrueOrFalse(param, true)
  }

  /**
   *   Converts the object to boolean.
   * @param {*} param param any object
   * @returns boolean value
   */
  toBoolean(param) {
    return this._isTrueOrFalse(param, true)
  }

  /**
   *   Converts the object to integer value.
   * @param {*} param param any object
   * @returns integer value
   */
  toInteger(param) {
    return ~~this._isTrueOrFalse(param, true)
  }

  /**
   *   Converts the boolean in string
   * @param {*} param param any object
   * @returns string true/false
   */
  toString(param) {
    return this._isTrueOrFalse(param, true).toString()
  }

  /**
   *   Converts the boolean in yes/no string
   * @param {*} param param any object
   * @returns string  yes/no
   */
  toStringYesNo(param) {
    const k = this._isTrueOrFalse(param, true)
    return this.i18n !== null
      ? this.i18n.__(booleanEnum[k]).toLowerCase()
      : booleanTranslate[k]
  }

  static create() {
    return new BooleanHelper()
  }
}

module.exports = BooleanHelper
