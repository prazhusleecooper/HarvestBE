/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  // Get All Orders
  'GET /allOrders': 'OrdersController.getAllOrders',
  // Get Recent Orders
  'GET /recentOrders': 'OrdersController.getRecentOrders',
  // Mark Order as Delivered
  'POST /markAsDelivered': 'OrdersController.markAsDelivered',
  // Create Order
  'POST /createOrder': 'OrdersController.createOrder',
  // CSV convert
  'GET /getCSV': 'OrdersController.consolidatedOrdersCSV',

  // Create/Add Product
  'POST /createProduct': 'ProductsController.createProduct',
  // Get All Products
  'GET /allProducts': 'ProductsController.getAllProducts',
  // Edit/Update Product
  'PATCH /editProduct': 'ProductsController.editProduct',
  // Delete Product
  'DELETE /deleteProduct': 'ProductsController.deleteProduct',

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
