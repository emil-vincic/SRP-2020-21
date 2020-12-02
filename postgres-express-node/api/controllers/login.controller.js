// login.controller.js
const winston = require("winston");
const { loginServiceInstance } = require("../../services");

const Logger = winston.loggers.get("logger");
exports.login = async(req, res) => {
    const { username, password } = req.body;
    try {
        const { user, token } = await loginServiceInstance.login({
            username,
            password,
        });
        return res.json({ user, token });
    } catch (err) {
        Logger.error(err);
        return res.status(401).json({ error: { message: err.message } });
    }
};