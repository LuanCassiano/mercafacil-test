const User = require("../models/User");
const jwt = require("jsonwebtoken");

const authConfig = require("../../config/auth");

class AuthenticationController {
    async store(req, res) {
        try {
            const { username, password } = req.body;

            const user = User.findOne({ username });

            if (!user) {
                return res.status(400).json({
                    message: "User not found",
                });
            }

            if (!(await user).checkPassword(password)) {
                return res.status(400).json({
                    message: "User not found",
                });
            }

            const { id } = user;

            return res.status(200).json({
                message: "ok",
                result: {
                    token: jwt.sign({ id }, authConfig.secret, {
                        expiresIn: authConfig.expiresIn,
                    }),
                },
            });
        } catch (error) {
            return res.status(400).json({
                message: "sometimes went wrong",
                result: error.response,
            });
        }
    }
}

module.exports = new AuthenticationController();
