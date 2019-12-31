const Id = '../Id'

module.exports = function makeCategoryDb ({ makeDb }) {
  return Object.freeze({
    insert,
    findByHash
  })
  async function insert ({ id: _id = Id.makeId(), ...categoryInfo }) {
    const db = await makeDb()
    const result = await db
      .collection('category')
      .insertOne({ _id, ...categoryInfo })
    const { _id: id, ...insertedInfo } = result.ops[0]
    return { id, ...insertedInfo }
  }

  async function findByHash (category) {
    const db = await makeDb()
    const result = await db.collection('category').find({ hash: category.hash })
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const { _id: id, ...insertedInfo } = found[0]
    return { id, ...insertedInfo }
  }
}