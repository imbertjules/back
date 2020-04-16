const mongoose = require('mongoose');
const { isEmail } = require('validator');

const Customers = mongoose.Schema({
    id: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
        type: String,
        required: false,
        validate: [isEmail, 'invalid email'],
        createIndexes: { unique: false}
    },
    password: {type: String, required: false}
});

module.exports = mongoose.model('Customers', Customers);