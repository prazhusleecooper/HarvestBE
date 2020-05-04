/**
 * ProductsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  createProduct: async (req, res) => {
    console.log('CREATE HIT');
     try {
        // let itemsList = await Ecom.find().sort('productId DESC');
        // let currentId = itemsList[0].productId + 1;
        await Products.create({
           name: req.body.name,
           category: req.body.category,
           priceUnit: req.body.priceUnit,
           pricePerUnit: req.body.pricePerUnit,
           sellers: [],
        });
        res.ok({
          status: 200,
          msg: 'PRODUCT ADDED'
        });
     } catch(error) {
        console.log('ERROR CREATING ITEM::', error);
        res.serverError({
          status: 500,
          msg: error
        });
     }
  },

  getAllProducts: async (req, res) => {
    try {
      let allProducts = await Products.find();
      return res.ok({
        status: 200,
        allProducts: allProducts});
    } catch (error) {
      return res.serverError({
        status: 500,
        msg: error
      });
    }
  },

  editProduct: async(req, res) => {
      try {
        let patch = {
          name: req.body.name,
          priceUnit: req.body.priceUnit,
          pricePerUnit: req.body.pricePerUnit,
        };
          await Products.update({id: req.body.id}, patch);
          res.ok({
            status: 200,
            msg: 'PRODUCT EDITED',
          });
        } catch(error) {
          console.log('ERROR EDITITNG PRODUCT::', error);
          res.serverError({
            status: 500,
            msg: error
          });
        }
  },

  deleteProduct: async (req, res) => {
    try {
      await Products.destroy({id: req.body.id});
      res.ok({
        status: 200,
        msg: 'PRODUCT DELETED'
      });
    } catch (error) {
      res.serverError(error);
    }
  }
};

