const makeCategoryDb =  require('./category-db')
const mongodb =  require( 'mongodb')

const MongoClient = mongodb.MongoClient
const url = process.env.DM_CATEGORY_DB_URL
const dbName = process.env.DM_CATEGORY_DB_NAME
const client = new MongoClient(url, { useNewUrlParser: true })

const makeDb =  async function () {
  if (!client.isConnected()) {
    await client.connect()
  }
  return client.db(dbName)
}

const categoryDB = makeCategoryDb({ makeDb })
module.exports = makeCategoryDb({ makeDb })