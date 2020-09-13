const express = require("express");
const routes = express.Router();
const authMiddleware = require("./app/middlewares/auth");

const UserController = require("./app/controllers/UserController");
const AuthController = require("./app/controllers/AuthenticationController");
const ContactMacapaController = require("./app/controllers/ContactMacapaController");
const ContactVarejaoController = require("./app/controllers/ContactVarejaoController");

routes.post("/api/user", UserController.store);

routes.post("/api/auth", AuthController.store);

routes.use(authMiddleware);

routes.get("/api/contact/macapa", ContactMacapaController.index);
routes.post("/api/contact/macapa", ContactMacapaController.store);

routes.get("/api/contact/varejao", ContactVarejaoController.index);
routes.post("/api/contact/varejao", ContactVarejaoController.store);

module.exports = routes;
