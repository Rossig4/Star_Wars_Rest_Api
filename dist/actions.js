"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.deleteFavPers = exports.addFavPers = exports.deleteFavPlaneta = exports.addFavPlaneta = exports.login = exports.updatePlanetas = exports.getPlanetaPorId = exports.getPlanets = exports.createPlanetas = exports.updatePeople = exports.getPeoplePorId = exports.getPeople = exports.createPeople = exports.deleteUsers = exports.updateUser = exports.getUsers = exports.createUser = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./entities/User");
var utils_1 = require("./utils");
var Personaje_1 = require("./entities/Personaje");
var Planeta_1 = require("./entities/Planeta");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userRepo, user, newUser, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.body.Nombre)
                    throw new utils_1.Exception("Por favor introduzca su nombre");
                if (!req.body.Apellido)
                    throw new utils_1.Exception("Por favor introduzca su apellido");
                if (!req.body.Correo)
                    throw new utils_1.Exception("Por favor ingrese su correo electrónico");
                if (!req.body.Contraseña)
                    throw new utils_1.Exception("Por favor ingrese su contraseña");
                userRepo = typeorm_1.getRepository(User_1.User);
                return [4 /*yield*/, userRepo.findOne({ where: { Correo: req.body.Correo } })];
            case 1:
                user = _a.sent();
                if (user)
                    throw new utils_1.Exception("El correo que ha ingresado ya está registrado");
                newUser = typeorm_1.getRepository(User_1.User).create(req.body);
                return [4 /*yield*/, typeorm_1.getRepository(User_1.User).save(newUser)];
            case 2:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
        }
    });
}); };
exports.createUser = createUser;
var getUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(User_1.User).find()];
            case 1:
                user = _a.sent();
                return [2 /*return*/, res.json(user)];
        }
    });
}); };
exports.getUsers = getUsers;
var updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(User_1.User).findOne(req.params.id)];
            case 1:
                user = _a.sent();
                if (!user) return [3 /*break*/, 3];
                typeorm_1.getRepository(User_1.User).merge(user, req.body);
                return [4 /*yield*/, typeorm_1.getRepository(User_1.User).save(user)];
            case 2:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
            case 3: return [2 /*return*/, res.status(404).json({ msg: "Usuario no registrado" })];
        }
    });
}); };
exports.updateUser = updateUser;
var deleteUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, users_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(User_1.User).findOne(req.params.id)];
            case 1:
                users = _a.sent();
                if (!!users) return [3 /*break*/, 2];
                return [2 /*return*/, res.json({ msg: "Este usuario no existe" })];
            case 2: return [4 /*yield*/, typeorm_1.getRepository(User_1.User)["delete"](req.params.id)];
            case 3:
                users_1 = _a.sent();
                return [2 /*return*/, res.json(users_1)];
        }
    });
}); };
exports.deleteUsers = deleteUsers;
var createPeople = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nuevoPers, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.body.Nombre)
                    throw new utils_1.Exception("Por favor ingrese un nombre");
                if (!req.body.Estatura)
                    throw new utils_1.Exception("Por favor indique estatura");
                if (!req.body.Fecha_Nacimiento)
                    throw new utils_1.Exception("Por favor ingrese fecha de nacimiento");
                if (!req.body.Color_de_ojos)
                    throw new utils_1.Exception("Por favor indique color de ojos");
                nuevoPers = typeorm_1.getRepository(Personaje_1.Personaje).create(req.body);
                return [4 /*yield*/, typeorm_1.getRepository(Personaje_1.Personaje).save(nuevoPers)];
            case 1:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
        }
    });
}); };
exports.createPeople = createPeople;
var getPeople = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var people;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Personaje_1.Personaje).find()];
            case 1:
                people = _a.sent();
                return [2 /*return*/, res.json(people)];
        }
    });
}); };
exports.getPeople = getPeople;
var getPeoplePorId = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var people;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Personaje_1.Personaje).findOne(req.params.id)];
            case 1:
                people = _a.sent();
                if (!people)
                    throw new utils_1.Exception("No se encuentra personaje con esa Id");
                return [2 /*return*/, res.json(people)];
        }
    });
}); };
exports.getPeoplePorId = getPeoplePorId;
var updatePeople = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var PersRepo, pers, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PersRepo = typeorm_1.getRepository(Personaje_1.Personaje);
                return [4 /*yield*/, PersRepo.findOne(req.params.id)];
            case 1:
                pers = _a.sent();
                if (!pers)
                    throw new utils_1.Exception("El personaje con esa Id no existe");
                PersRepo.merge(pers, req.body);
                return [4 /*yield*/, PersRepo.save(pers)];
            case 2:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
        }
    });
}); };
exports.updatePeople = updatePeople;
var createPlanetas = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nuevoPlaneta, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.body.Nombre)
                    throw new utils_1.Exception("Por favor ingrese un nombre");
                if (!req.body.Rotación)
                    throw new utils_1.Exception("Por favor ingrese un valor de rotación");
                if (!req.body.Diámetro)
                    throw new utils_1.Exception("Por favor introduzca diámetro");
                if (!req.body.Gravedad)
                    throw new utils_1.Exception("Por favor introduzca valor referente a la gravedad");
                nuevoPlaneta = typeorm_1.getRepository(Planeta_1.Planeta).create(req.body);
                return [4 /*yield*/, typeorm_1.getRepository(Planeta_1.Planeta).save(nuevoPlaneta)];
            case 1:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
        }
    });
}); };
exports.createPlanetas = createPlanetas;
var getPlanets = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var planeta;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Planeta_1.Planeta).find()];
            case 1:
                planeta = _a.sent();
                return [2 /*return*/, res.json(planeta)];
        }
    });
}); };
exports.getPlanets = getPlanets;
var getPlanetaPorId = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var planeta;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(Planeta_1.Planeta).findOne(req.params.id)];
            case 1:
                planeta = _a.sent();
                if (!planeta)
                    throw new utils_1.Exception("No existe un planeta con esa Id");
                return [2 /*return*/, res.json(planeta)];
        }
    });
}); };
exports.getPlanetaPorId = getPlanetaPorId;
var updatePlanetas = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var planetaRepo, planeta, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                planetaRepo = typeorm_1.getRepository(Planeta_1.Planeta);
                return [4 /*yield*/, planetaRepo.findOne(req.params.id)];
            case 1:
                planeta = _a.sent();
                if (!planeta)
                    throw new utils_1.Exception("No existe un planeta con esa Id");
                planetaRepo.merge(planeta, req.body);
                return [4 /*yield*/, planetaRepo.save(planeta)];
            case 2:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
        }
    });
}); };
exports.updatePlanetas = updatePlanetas;
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userRepo, user, token;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.body.Correo)
                    throw new utils_1.Exception("Introduzca un correo electrónico", 400);
                if (!req.body.Contraseña)
                    throw new utils_1.Exception("Por favor introduzca una contraseña", 400);
                return [4 /*yield*/, typeorm_1.getRepository(User_1.User)];
            case 1:
                userRepo = _a.sent();
                return [4 /*yield*/, userRepo.findOne({ where: { Correo: req.body.Correo, Contraseña: req.body.Contraseña } })];
            case 2:
                user = _a.sent();
                if (!user)
                    throw new utils_1.Exception("Usuario o contraseña incorrectos", 401);
                token = jsonwebtoken_1["default"].sign({ user: user }, process.env.JWT_KEY, { expiresIn: 60 * 60 });
                return [2 /*return*/, res.json({ user: user, token: token })];
        }
    });
}); };
exports.login = login;
var addFavPlaneta = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var planetaRepo, userRepo, user, planeta, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                planetaRepo = typeorm_1.getRepository(Planeta_1.Planeta);
                userRepo = typeorm_1.getRepository(User_1.User);
                return [4 /*yield*/, userRepo.findOne(req.params.userid, { relations: ["planetas"] })];
            case 1:
                user = _a.sent();
                return [4 /*yield*/, planetaRepo.findOne(req.params.planetaid)];
            case 2:
                planeta = _a.sent();
                if (!(user && planeta)) return [3 /*break*/, 4];
                user.planetas = __spreadArray(__spreadArray([], user.planetas), [planeta]);
                return [4 /*yield*/, userRepo.save(user)];
            case 3:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
            case 4: return [2 /*return*/, res.json("ERROR")];
        }
    });
}); };
exports.addFavPlaneta = addFavPlaneta;
var deleteFavPlaneta = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, planetaToDelete, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(User_1.User).findOne({ relations: ["planetas"], where: { id: req.params.userid } })];
            case 1:
                user = _a.sent();
                return [4 /*yield*/, typeorm_1.getRepository(Planeta_1.Planeta).findOne({ where: { id: req.params.planetaid } })];
            case 2:
                planetaToDelete = _a.sent();
                result = { error: "no existe" };
                if (!(user && planetaToDelete)) return [3 /*break*/, 4];
                user.planetas = user.planetas.filter(function (planeta) {
                    return planeta.id !== planetaToDelete.id;
                });
                return [4 /*yield*/, typeorm_1.getRepository(User_1.User).save(user)];
            case 3:
                result = _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/, res.json(result)];
        }
    });
}); };
exports.deleteFavPlaneta = deleteFavPlaneta;
var addFavPers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var persRepo, userRepo, user, personaje, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                persRepo = typeorm_1.getRepository(Personaje_1.Personaje);
                userRepo = typeorm_1.getRepository(User_1.User);
                return [4 /*yield*/, userRepo.findOne(req.params.userid, { relations: ["personajes"] })];
            case 1:
                user = _a.sent();
                return [4 /*yield*/, persRepo.findOne(req.params.personajeid)];
            case 2:
                personaje = _a.sent();
                if (!(user && personaje)) return [3 /*break*/, 4];
                user.personajes = __spreadArray(__spreadArray([], user.personajes), [personaje]);
                return [4 /*yield*/, userRepo.save(user)];
            case 3:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
            case 4: return [2 /*return*/, res.json("ERROR")];
        }
    });
}); };
exports.addFavPers = addFavPers;
var deleteFavPers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, personajeToDelete, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(User_1.User).findOne({ relations: ["personajes"], where: { id: req.params.userid } })];
            case 1:
                user = _a.sent();
                return [4 /*yield*/, typeorm_1.getRepository(Personaje_1.Personaje).findOne({ where: { id: req.params.personajeid } })];
            case 2:
                personajeToDelete = _a.sent();
                result = { error: "El personaje o usuario no existe" };
                if (!(user && personajeToDelete)) return [3 /*break*/, 4];
                user.personajes = user.personajes.filter(function (personaje) {
                    return personaje.id !== personajeToDelete.id;
                });
                return [4 /*yield*/, typeorm_1.getRepository(User_1.User).save(user)];
            case 3:
                result = _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/, res.json(result)];
        }
    });
}); };
exports.deleteFavPers = deleteFavPers;
