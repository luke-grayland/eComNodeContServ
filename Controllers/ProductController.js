const DbService = require('../Services/DbService')
const JsonResponse = require('../Services/JsonResponseService')
const ProductService = require('../Services/ProductService')
const objId = require('mongodb').ObjectId


let getAllProducts = async(req, res) => {
    let collection = await DbService('items')
    let items = await ProductService.getAllProducts(collection)
    let apiResponse;

    items.length > 0
        ? apiResponse = JsonResponse(items, true, 'Success')
        : apiResponse = JsonResponse()

    res.json(apiResponse)
}

let getSingleProduct = async (req, res) => {
    let collection = await DbService('items')
    let id = objId(req.params.id)
    let items = await collection.find({_id: id}).toArray()
    let apiResponse;

    items.length > 0
        ? apiResponse = JsonResponse(items, true, 'Success')
        : apiResponse = JsonResponse()

    res.json(apiResponse)
}

let addNewProduct = async (req, res) => {

    //remember to add validation layer after creating this
    //if not valid, return empty json response to give restful error message

    let {title, price, image, description} = req.body

    console.log(req.body)
    let collection = await DbService('items')
    let result = await ProductService.addNewProduct(collection, {title, price, image, description})
    console.log(result.insertedId)

    let apiResponse;

    result.insertedId
        ? apiResponse = JsonResponse([], true, 'Item successfully added')
        : apiResponse = JsonResponse([], false, 'Item not added')

    res.json(apiResponse)


}

module.exports.getAllProducts = getAllProducts
module.exports.getSingleProduct = getSingleProduct
module.exports.addNewProduct = addNewProduct

