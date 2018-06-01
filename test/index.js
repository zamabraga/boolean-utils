const expect = require('chai').expect
const booleanUtils = require('./../src')

describe('Boolean', () => {
  describe('#isTrue', () => {
    it('should return true when pass true', () => {
      expect(booleanUtils.isTrue(true)).to.be.true
    })
    it('should return true when pass "true"', () => {
      expect(booleanUtils.isTrue('true')).to.be.true
    })
    it('should return true when pass "TRUE"', () => {
      expect(booleanUtils.isTrue('TRUE')).to.be.true
    })
    it('should return true when pass 1', () => {
      expect(booleanUtils.isTrue(1)).to.be.true
    })
    it('should return true when pass "1"', () => {
      expect(booleanUtils.isTrue('1')).to.be.true
    })
    it('should return false when pass false', () => {
      expect(booleanUtils.isTrue(false)).to.be.false
    })
    it('should return false when pass "false" ', () => {
      var x = Boolean('false')
      expect(booleanUtils.isTrue('false')).to.be.false
    })
    it('should return false when pass "FALSE" ', () => {
      expect(booleanUtils.isTrue('FALSE')).to.be.false
    })
    it('should return false when pass 0 ', () => {
      expect(booleanUtils.isTrue(0)).to.be.false
    })
    it('should return false when pass "0" ', () => {
      expect(booleanUtils.isTrue('0')).to.be.false
    })
  })
})
