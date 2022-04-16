let getAllProducts = async(collection) => {
    return await collection.find({}).toArray()
}

let addNewProduct = async(collection, product) => {
    return await collection.insertOne(product)
}

module.exports.getAllProducts = getAllProducts
module.exports.addNewProduct = addNewProduct

