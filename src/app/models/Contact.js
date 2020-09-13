const { Model, Sequelize } = require("sequelize");

class Contact extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                cellphone: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        return this;
    }
}

module.exports = Contact;
