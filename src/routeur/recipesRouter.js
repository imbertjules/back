const recipesController = require('../controllers/recipesController').RecipesController;

let ctrl = new recipesController();

module.exports = (app) => {
    app.route('/api/customers')
        .get(ctrl.allRecipes)
        .post(ctrl.createRecipes);

    app.route('/api/customers/:id')
        .delete(ctrl.deleteRecipes);

    console.log('register routes');
};

