const {addCategory} = require('../business/category')
const makePostCategory = require('./post-category')
const notFound = require('./not-found')
const postCategory = makePostCategory({ addCategory })
  
const categoryController = Object.freeze({
   postCategory,
   notFound
})

module.exports = {postCategory, categoryController, notFound}