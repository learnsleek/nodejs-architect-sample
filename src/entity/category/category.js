module.exports = function buildMakeCategory ({Id, md5}){
  return function makeCategory({
      id = Id.makeId(),
      name,
      createdOn = Date.now(),
      parentCategoryId,
      updatedOn = Date.now(),
      createdBy,
      updatedBy,
      comments
  }={}) {
    if (!Id.isValidId(id)) {
        throw new Error('Category must have a valid id.')
    }

    if (name.length < 2) {
        throw new Error("Name must be longer than 2 characters.")
    }
    let hash;

    return  Object.freeze({
        getId: () => id,
        getName : () => name,
        getHash: () => hash || (hash = makeHash()),
        getCreatedOn: () => createdOn,
        getUpdatedOn: () => updatedOn,
        getParentCategoryId: () => parentCategoryId,
        getCreatedBy: () => createdBy,
        getUpdatedBy: () => updatedBy,
        getComments : () => comments
      })

      function makeHash () {
        return md5(
          name
        )
      }
  }
};