const Contact = require("../models/Contact");
const maskPhone = require("../../helpers/phoneMask");

class ContactMacapaController {
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
            const { name, cellphone } = req.body;

            const contact = await Contact.create({
                name: name.toUpperCase(),
                cellphone: maskPhone(cellphone),
            });

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

module.exports = new ContactMacapaController();
