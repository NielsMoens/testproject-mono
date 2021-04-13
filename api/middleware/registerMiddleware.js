const express = require('express');
const cors = require('cors');
const helmet = require("helmet");

const registerMiddleware = (app) => {
    // allow all cors
    app.use(cors())

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        next();
      });

    // use json
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true,
    }));

    // helmet security
    app.use(helmet.noSniff());
    app.use(helmet.hidePoweredBy());
    app.use(helmet.xssFilter());

    app.use(require('body-parser').urlencoded({extended: true}));
};

module.exports = {
    registerMiddleware
};
