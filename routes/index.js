'use strict';

let express = require('express');
let router = express.Router();

let cache = require('./cache');
let home = require('./home');
let login = require('./login');
let logout = require('./logout');
let user = require('./user');

router.use('/', home);
router.use('/cache', cache);
router.use('/login', login);
router.use('/logout', logout);
router.use('/user', user);

module.exports = router;
