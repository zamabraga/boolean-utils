const assert = require('chai').assert

const booleanUtils = require('./../src').create()
const trueScenarios = [true, 'true', 'TRUE', 'yes', 'YES', 1, '1']
const falseScenarios = [false, 'false', 'FALSE', 'no', 'NO', 0, '0']

const tests = (f, expectValue, scenarios) => {
  scenarios.forEach(e => {
    switch (typeof e) {
      case 'string':
        it(`should return ${expectValue.toString()} when pass "${e}"`, () => {
          assert.equal(expectValue, f.call(booleanUtils, e))
        })
        break
      default:
        it(`should return ${expectValue.toString()} when pass ${e}`, () => {
          assert.equal(expectValue, f.call(booleanUtils, e))
        })
        break
    }
  })
}

describe('Boolean', () => {
  describe('#isTrue', () => {
    tests(booleanUtils.isTrue, true, trueScenarios)
    tests(booleanUtils.isTrue, false, falseScenarios)
  })
  describe('#isFalse', () => {
    tests(booleanUtils.isFalse, false, trueScenarios)
    tests(booleanUtils.isFalse, true, falseScenarios)
  })
  describe('#isNotTrue', () => {
    tests(booleanUtils.isNotTrue, false, trueScenarios)
    tests(booleanUtils.isNotTrue, true, falseScenarios)
  })
  describe('#isNotFalse', () => {
    tests(booleanUtils.isNotFalse, true, trueScenarios)
    tests(booleanUtils.isNotFalse, false, falseScenarios)
  })
  describe('#negate', () => {
    tests(booleanUtils.negate, false, trueScenarios)
    tests(booleanUtils.negate, true, falseScenarios)
  })
  describe('#toBoolean', () => {
    tests(booleanUtils.toBoolean, true, trueScenarios)
    tests(booleanUtils.toBoolean, false, falseScenarios)
  })
  describe('#toInteger', () => {
    tests(booleanUtils.toInteger, 1, trueScenarios)
    tests(booleanUtils.toInteger, 0, falseScenarios)
  })
  describe('#toString', () => {
    tests(booleanUtils.toString, 'true', trueScenarios)
    tests(booleanUtils.toString, 'false', falseScenarios)
  })
  describe('#toStringYesNo', () => {
    tests(booleanUtils.toStringYesNo, 'yes', trueScenarios)
    tests(booleanUtils.toStringYesNo, 'no', falseScenarios)
  })
})
