const expect = require('chai').expect
const i18n = require('i18n')
const ptBr = require('./locales/pt-BR.json')
i18n.configure({
  locales: ['pt-BR'],
  defaultLocale: 'pt-BR',
  directory: __dirname + '/locales'
})

const createBooleanUtils = require('./../src')

describe('Boolean', () => {
  describe('#isTrue', () => {
    it('should return true when pass true', () => {
      expect(createBooleanUtils().isTrue(true)).to.be.true
    })
    it('should return true when pass "true"', () => {
      expect(createBooleanUtils().isTrue('true')).to.be.true
    })
    it('should return true when pass "TRUE"', () => {
      expect(createBooleanUtils().isTrue('TRUE')).to.be.true
    })
    it('should return true when pass "yes"', () => {
      expect(createBooleanUtils().isTrue('yes')).to.be.true
    })
    it('should return true when pass "YES"', () => {
      expect(createBooleanUtils().isTrue('YES')).to.be.true
    })
    it('should return true when pass "yes" in pt-BR', () => {
      expect(createBooleanUtils({ translateObj: ptBr }).isTrue('sim')).to.be
        .true
    })
    it('should return true when pass 1', () => {
      expect(createBooleanUtils().isTrue(1)).to.be.true
    })
    it('should return true when pass "1"', () => {
      expect(createBooleanUtils().isTrue('1')).to.be.true
    })
    it('should return false when pass false', () => {
      expect(createBooleanUtils().isTrue(false)).to.be.false
    })
    it('should return false when pass "false" ', () => {
      expect(createBooleanUtils().isTrue('false')).to.be.false
    })
    it('should return false when pass "FALSE" ', () => {
      expect(createBooleanUtils().isTrue('FALSE')).to.be.false
    })
    it('should return false when pass 0 ', () => {
      expect(createBooleanUtils().isTrue(0)).to.be.false
    })
    it('should return false when pass "0" ', () => {
      expect(createBooleanUtils().isTrue('0')).to.be.false
    })
    it('should return false when pass "false" in pt-BR', () => {
      expect(createBooleanUtils({ translateObj: ptBr }).isTrue('não')).to.be
        .false
    })
  })
  describe('#isFalse', () => {
    it('should return false when pass true', () => {
      expect(createBooleanUtils().isFalse(true)).to.be.false
    })
    it('should return false when pass "true"', () => {
      expect(createBooleanUtils().isFalse('true')).to.be.false
    })
    it('should return false when pass "TRUE"', () => {
      expect(createBooleanUtils().isFalse('TRUE')).to.be.false
    })
    it('should return false when pass "yes"', () => {
      expect(createBooleanUtils().isFalse('yes')).to.be.false
    })
    it('should return false when pass "YES"', () => {
      expect(createBooleanUtils().isFalse('YES')).to.be.false
    })
    it('should return false when pass "yes" in pt-BR', () => {
      expect(createBooleanUtils({ translateObj: ptBr }).isFalse('sim')).to.be
        .false
    })
    it('should return false when pass 1', () => {
      expect(createBooleanUtils().isFalse(1)).to.be.false
    })
    it('should return false when pass "1"', () => {
      expect(createBooleanUtils().isFalse('1')).to.be.false
    })
    it('should return true when pass false', () => {
      expect(createBooleanUtils().isFalse(false)).to.be.true
    })
    it('should return true when pass "false" ', () => {
      expect(createBooleanUtils().isFalse('false')).to.be.true
    })
    it('should return true when pass "FALSE" ', () => {
      expect(createBooleanUtils().isFalse('FALSE')).to.be.true
    })
    it('should return true when pass 0 ', () => {
      expect(createBooleanUtils().isFalse(0)).to.be.true
    })
    it('should return true when pass "0" ', () => {
      expect(createBooleanUtils().isFalse('0')).to.be.true
    })
    it('should return true when pass "false" in pt-BR', () => {
      expect(createBooleanUtils({ translateObj: ptBr }).isFalse('não')).to.be
        .true
    })
  })
  describe('#isNotTrue', () => {
    it('should return false when pass true', () => {
      expect(createBooleanUtils().isNotTrue(true)).to.be.false
    })
    it('should return false when pass "true"', () => {
      expect(createBooleanUtils().isNotTrue('true')).to.be.false
    })
    it('should return false when pass "TRUE"', () => {
      expect(createBooleanUtils().isNotTrue('TRUE')).to.be.false
    })
    it('should return false when pass "yes"', () => {
      expect(createBooleanUtils().isNotTrue('yes')).to.be.false
    })
    it('should return false when pass "YES"', () => {
      expect(createBooleanUtils().isNotTrue('YES')).to.be.false
    })
    it('should return false when pass "yes" in pt-BR', () => {
      expect(createBooleanUtils({ translateObj: ptBr }).isNotTrue('sim')).to.be
        .false
    })
    it('should return false when pass 1', () => {
      expect(createBooleanUtils().isNotTrue(1)).to.be.false
    })
    it('should return false when pass "1"', () => {
      expect(createBooleanUtils().isNotTrue('1')).to.be.false
    })
    it('should return true when pass false', () => {
      expect(createBooleanUtils().isNotTrue(false)).to.be.true
    })
    it('should return true when pass "false" ', () => {
      expect(createBooleanUtils().isNotTrue('false')).to.be.true
    })
    it('should return true when pass "FALSE" ', () => {
      expect(createBooleanUtils().isNotTrue('FALSE')).to.be.true
    })
    it('should return true when pass 0 ', () => {
      expect(createBooleanUtils().isNotTrue(0)).to.be.true
    })
    it('should return true when pass "0" ', () => {
      expect(createBooleanUtils().isNotTrue('0')).to.be.true
    })
    it('should return true when pass "false" in pt-BR', () => {
      expect(createBooleanUtils({ translateObj: ptBr }).isNotTrue('não')).to.be
        .true
    })
  })
  describe('#isNotFalse', () => {
    it('should return true when pass true', () => {
      expect(createBooleanUtils().isNotFalse(true)).to.be.true
    })
    it('should return true when pass "true"', () => {
      expect(createBooleanUtils().isNotFalse('true')).to.be.true
    })
    it('should return true when pass "TRUE"', () => {
      expect(createBooleanUtils().isNotFalse('TRUE')).to.be.true
    })
    it('should return true when pass "yes"', () => {
      expect(createBooleanUtils().isNotFalse('yes')).to.be.true
    })
    it('should return true when pass "YES"', () => {
      expect(createBooleanUtils().isNotFalse('YES')).to.be.true
    })
    it('should return true when pass "yes" in pt-BR', () => {
      expect(createBooleanUtils({ translateObj: ptBr }).isNotFalse('sim')).to.be
        .true
    })
    it('should return true when pass 1', () => {
      expect(createBooleanUtils().isNotFalse(1)).to.be.true
    })
    it('should return true when pass "1"', () => {
      expect(createBooleanUtils().isNotFalse('1')).to.be.true
    })
    it('should return false when pass false', () => {
      expect(createBooleanUtils().isNotFalse(false)).to.be.false
    })
    it('should return false when pass "false" ', () => {
      expect(createBooleanUtils().isNotFalse('false')).to.be.false
    })
    it('should return false when pass "FALSE" ', () => {
      expect(createBooleanUtils().isNotFalse('FALSE')).to.be.false
    })
    it('should return false when pass 0 ', () => {
      expect(createBooleanUtils().isNotFalse(0)).to.be.false
    })
    it('should return false when pass "0" ', () => {
      expect(createBooleanUtils().isNotFalse('0')).to.be.false
    })
    it('should return false when pass "false" in pt-BR', () => {
      expect(createBooleanUtils({ translateObj: ptBr }).isNotFalse('não')).to.be
        .false
    })
  })
})
