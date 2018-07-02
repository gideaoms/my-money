const path = require('path');
const express = require('express');
const forestAdmin = require('forest-express-sequelize');
const { sequelize } = require('./models');
const secret = require('../config/secret');

const app = express();

app.use(
  forestAdmin.init({
    modelsDir: path.resolve('./src/models'),
    envSecret: secret.FOREST_ENV_SECRET,
    authSecret: secret.FOREST_AUTH_SECRET,
    sequelize
  })
);
app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(process.env.PORT || 5000, () => console.info('App is running'));
