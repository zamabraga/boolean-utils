module.exports = {
  isTrue(param) {
    switch (typeof param) {
      case 'boolean':
        return param === true
      case 'string':
        return param.toLowerCase() === 'true' || param === '1'
      case 'number':
        return param === 1
    }
    return false
  }
}
