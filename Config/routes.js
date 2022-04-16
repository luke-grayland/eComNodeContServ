const ProductController = require('../Controllers/ProductController')

const routes = (app) => {
    app.get('/products', ProductController.getAllProducts)
    app.get('/products/:id', ProductController.getSingleProduct)
    app.post('/products', ProductController.addNewProduct)
}

module.exports = routes