const mongoose = require('mongoose');

const recipesSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    author: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: String, required: true },
    ingredients: {
        name:,
        unites:,
        poid: ,
    },
    date: {type: Date, required:true},
    preparationTime: {type: String, required: true },
 }

    
});

module.exports = mongoose.model('projet', projetSchema);