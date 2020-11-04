class LoginService {
    constructor({ logger, userModel }) {
        this.userModel = userModel;
        this.logger = logger;
    }

    async getUser(userDTO) {
        try {
            const user = await this.userModel.findOne({
                // * to include only some attributes use:
                // * attributes: ["username", "id"]
                where: userDTO,
            });
            return user;
        } catch (err) {
            this.logger.error("Error %o", err);
            throw err;
        }

    }
}

module.exports = LoginService;