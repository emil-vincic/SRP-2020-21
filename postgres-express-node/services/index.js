const winston = require("winston");
const UserService = require("./user.service");
const LoginService = require("./login.service");
const { User } = require("../models");

const logger = winston.loggers.get("logger");

exports.loginServiceInstance = new LoginService({ logger, userModel: User });
exports.userServiceInstance = new UserService({ logger, userModel: User });