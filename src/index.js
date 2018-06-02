const booleanEnum = {
  true: 'true',
  false: 'false'
}

const booleanTranslate = {
  [booleanEnum.true]: 'yes',
  [booleanEnum.false]: 'no',
  error: 'not a boolean'
}

/**
 * @class BooleanHelper
 */
class BooleanHelper {
  /**
   *
   * @param {i18n} i18n instance
   * @param {translateObj} object with boolean translate {true : 'yes', false : 'no'}
   */
  constructor({ i18n, translateObj }) {
    this.i18n = i18n
    this.booleanKeys = Object.assign(booleanTranslate, translateObj)
  }

  _isTrueOrFalse(param, value) {
    switch (typeof param) {
      case 'boolean':
        return param === value
      case 'string':
        return (
          param.toLowerCase() === booleanEnum[value] ||
          param === (~~value).toString() ||
          (this.i18n === undefined &&
            param.toLowerCase() ===
              this.booleanKeys[booleanEnum[value]].toLowerCase()) ||
          (this.i18n !== undefined &&
            param.toLowerCase() ===
              this.i18n.__(booleanEnum[value]).toLowerCase())
        )
      case 'number':
        return param === ~~value
    }
    throw booleanTranslate.error
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
    return booleanTranslate[this._isTrueOrFalse(param, true)]
  }

  static create(params) {
    return new BooleanHelper(params || {})
  }
}

module.exports = BooleanHelper
