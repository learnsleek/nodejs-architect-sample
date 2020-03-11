const  makeCategory = require('../../entity/category/')

module.exports = function makeAddCategory({ categoryDB }) {
    console.log("categoryDB :: ", categoryDB)
    return async function addCategory (categoryInfo) {
      const category = makeCategory(categoryInfo)
      const exists = await categoryDB.findByHash({ hash: category.getHash() })
      if (exists) {
        return exists
      }

      const existSubCategory = await categoryDB.findByHash({ hash: category.getHash() })
      if (exists) {
        return exists
      }
      
      return categoryDB.insert({
        id : category.getId(),
        name : category.getName(),
        hash : category.getHash(),
        createdOn : category.getCreatedOn(),
        updatedOn : category.getUpdatedOn(),
        createdBy : category.getCreatedBy(),
        updatedBy : category.getUpdatedBy(),
        parentCategoryId : "",
        comments : category.getComments()
      })
  }
}