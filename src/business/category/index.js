const makeAddCategory = require('./add-category');
const categoryDB = require('../../data-access/');
const addCategory = makeAddCategory({ categoryDB})

const categoryService = Object.freeze({
    addCategory
})
  
module.exports = {addCategory, categoryService}