const User = require("../models/User");

class UserController {
    async store(req, res) {
        const { username } = req.body;

        try {
            if (await User.findOne({ username })) {
                return res.status(400).json({
                    message: "User already exists",
                });
            }

            const user = await User.create(req.body);

            return res.status(201).json({
                message: "created",
                result: user,
            });
        } catch (error) {
            return res.status(400).json({
                message: "sometimes went wrong",
                result: error,
            });
        }
    }
}

module.exports = new UserController();
