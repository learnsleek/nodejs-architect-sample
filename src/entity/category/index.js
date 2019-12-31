const crypto = require('crypto')
const Id = require('../../Id')
const buildMakeCategory = require('./category')

const makeCategory = buildMakeCategory({ Id, md5 })

function md5 (text) {
    return crypto
      .createHash('md5')
      .update(text, 'utf-8')
      .digest('hex')
  }

module.exports = makeCategory
