require ('./init.js')();
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.NODE_PORT;
const app = express();

const recipeRouter = require('./routeur/recipesRouter')(app);
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server running on port ${port}`));