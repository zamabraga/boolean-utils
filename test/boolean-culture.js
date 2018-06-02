const assert = require('chai').assert
const i18n = require('i18n')
const ptBr = require('./locales/pt-BR.json')
i18n.configure({
  locales: ['pt-BR'],
  defaultLocale: 'pt-BR',
  directory: __dirname + '/locales'
})

const booleanUtils = require('./../src')
const trueScenarios = [true, 'true', 'TRUE', 'sim', 'SIM', 1, '1']
const falseScenarios = [false, 'false', 'FALSE', 'não', 'NÃO', 0, '0']

booleanUtils.culture = {
  true: 'sim',
  false: 'não',
  booleanError: 'não é um boleano'
}

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

describe('Boolean Culture', () => {
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
    tests(booleanUtils.toStringYesNo, 'sim', trueScenarios)
    tests(booleanUtils.toStringYesNo, 'não', falseScenarios)
  })
})
