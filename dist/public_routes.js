"use strict";
exports.__esModule = true;
/**
 * Public Routes are those API url's that anyone can request
 * whout having to be logged in, for example:
 *
 * POST /user is the endpoint to create a new user or "sign up".
 * POST /token can be the endpoint to "log in" (generate a token)
 */
var express_1 = require("express");
var utils_1 = require("./utils");
var actions_1 = require("./actions");
var actions_2 = require("./actions");
var router = express_1.Router();
// signup route, creates a new user in the DB
router.post('/users', utils_1.safe(actions_2.createUser));
router.post('/login', utils_1.safe(actions_1.login));
router.get('/people', utils_1.safe(actions_2.getPeople));
router.get('/people/:id', utils_1.safe(actions_2.getPeoplePorId));
router.get('/planetas', utils_1.safe(actions_2.getPlanets));
router.get('/planetas/:id', utils_1.safe(actions_2.getPlanetaPorId));
exports["default"] = router;
