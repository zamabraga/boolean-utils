const booleanEnum = {
  true: 'true',
  false: 'false'
}

const booleanTranslate = {
  [booleanEnum.true]: 'yes',
  [booleanEnum.false]: 'no'
}

const booleanInt = {
  [booleanEnum.true]: 1,
  [booleanEnum.false]: 0
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
          param === booleanInt[value].toString() ||
          (this.i18n === undefined &&
            param.toLowerCase() ===
              this.booleanKeys[booleanEnum[value]].toLowerCase()) ||
          (this.i18n !== undefined &&
            param.toLowerCase() ===
              this.i18n.__(booleanEnum[value]).toLowerCase())
        )
      case 'number':
        return param === booleanInt[value]
    }
    return false
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
}

module.exports = function(params) {
  return new BooleanHelper(params || {})
}
