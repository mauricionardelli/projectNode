const express  = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando  app
const app  = express();
app.use(express.json());

//Faz com que qualquer dominio possa usar minha API
app.use(cors());

mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true }
);

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3001);