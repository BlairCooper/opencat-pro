'use strict';

const Util = require('util');
const Config = require('../../config');

exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {

            reply({ message: Util.format('Welcome to %s!', Config.get('/projectName')) });
        }
    });

    next();
};


exports.register.attributes = {
    name: 'index'
};
