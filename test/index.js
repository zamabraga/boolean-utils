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
      var x = Boolean('false')
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
    it('should return true when pass true', () => {
      expect(createBooleanUtils().isFalse(true)).to.be.false
    })
    it('should return true when pass "true"', () => {
      expect(createBooleanUtils().isFalse('true')).to.be.false
    })
    it('should return true when pass "TRUE"', () => {
      expect(createBooleanUtils().isFalse('TRUE')).to.be.false
    })
    it('should return true when pass "yes"', () => {
      expect(createBooleanUtils().isFalse('yes')).to.be.false
    })
    it('should return true when pass "YES"', () => {
      expect(createBooleanUtils().isFalse('YES')).to.be.false
    })
    it('should return true when pass "yes" in pt-BR', () => {
      expect(createBooleanUtils({ translateObj: ptBr }).isFalse('sim')).to.be
        .false
    })
    it('should return true when pass 1', () => {
      expect(createBooleanUtils().isFalse(1)).to.be.false
    })
    it('should return true when pass "1"', () => {
      expect(createBooleanUtils().isFalse('1')).to.be.false
    })
    it('should return false when pass false', () => {
      expect(createBooleanUtils().isFalse(false)).to.be.true
    })
    it('should return false when pass "false" ', () => {
      var x = Boolean('false')
      expect(createBooleanUtils().isFalse('false')).to.be.true
    })
    it('should return false when pass "FALSE" ', () => {
      expect(createBooleanUtils().isFalse('FALSE')).to.be.true
    })
    it('should return false when pass 0 ', () => {
      expect(createBooleanUtils().isFalse(0)).to.be.true
    })
    it('should return false when pass "0" ', () => {
      expect(createBooleanUtils().isFalse('0')).to.be.true
    })
    it('should return false when pass "false" in pt-BR', () => {
      expect(createBooleanUtils({ translateObj: ptBr }).isFalse('não')).to.be
        .true
    })
  })
})
