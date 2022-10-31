require('dotenv').config();
const express = require('express');
const sequelize = require('./db')

const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(5000, () => console.log(`Server has been started on port ${PORT}`));

    } catch (e) {

    }
}
