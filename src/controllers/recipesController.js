const AbstractController = require('./AbstractController').AbstractController;
const Customers = require('../models/customers');

class RecipesController extends AbstractController{

    allRecipes(req, res) {
        Customers.find()
            .then(customers => res.send(customers))
            .catch(() => this.throwError(error, res));
    }

    deleteRecipes (req, res) {
        Customers.findOneAndDelete({ _id: req.params.id })
            .then(() => res.send({ message: 'Objet supprimé !'}))
            .catch(() => this.throwError(error, res));
    }
    
    createRecipes () {
        const customers = new Customers({
            id: req.body.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
          });
        customers.save().then(
            () => {
                res.status(201).json({
                    message: 'Post saved successfully!'
                  });
            }  
        ).catch(
            (error) => {
              res.status(400).json({
                error: error
              });
        })
    }

}

module.exports.RecipesController = RecipesController;

