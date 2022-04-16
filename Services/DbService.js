const MongoClient = require('mongodb').MongoClient
const url = "mongodb://root:password@localhost:27017"

const DbService = async(collection) => {
    let connection = await MongoClient.connect(url)
    const db = connection.db('robotShop')
    return db.collection(collection)

}

module.exports = DbService

