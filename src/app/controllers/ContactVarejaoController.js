const Contact = require("../models/Contact");

class ContactVarejaoController {
    async index(req, res) {
        try {
            const contacts = await Contact.findAll();

            return res.status(200).json({
                message: "ok",
                result: contacts,
            });
        } catch (error) {
            return res.status(400).json({
                result: error,
            });
        }
    }

    async store(req, res) {
        try {
            const contact = await Contact.create(req.body);

            return res.json({
                message: "created",
                result: contact,
            });
        } catch (error) {
            return res.status(400).json({
                result: error,
            });
        }
    }
}

module.exports = new ContactVarejaoController();
