const assert = require('chai').assert
const i18n = require('i18n')
const ptBr = require('./locales/pt-BR.json')
i18n.configure({
  locales: ['pt-BR'],
  defaultLocale: 'pt-BR',
  directory: __dirname + '/locales'
})

const booleanUtils = require('./../src').create()
const trueScenarios = [true, 'true', 'TRUE', 'yes', 'YES', 1, '1']
const falseScenarios = [false, 'false', 'FALSE', 'no', 'NO', 0, '0']

const tests = (f, expectValue, scenarios) => {
  scenarios.forEach(e => {
    switch (typeof e) {
      case 'string':
        it(`should return ${expectValue.toString()} when pass "${e}"`, () => {
          assert.equal(f.call(booleanUtils, e), expectValue)
        })
        break
      default:
        it(`should return ${expectValue.toString()} when pass ${e}`, () => {
          assert.equal(f.call(booleanUtils, e), expectValue)
        })
        break
    }
  })

  // it(`should return ${expectValue} when pass "yes" in pt-BR`, () => {
  //   af(createBooleanUtils({ translateObj: ptBr }).isTrue('sim'))
  // })
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
})
