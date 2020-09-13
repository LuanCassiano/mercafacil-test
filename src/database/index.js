const Sequelize = require("sequelize");

const User = require("../app/models/User");
const Contact = require("../app/models/Contact");

const dbConfig = require("../config/database");

const models = [User, Contact];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(dbConfig);

        models.map((model) => model.init(this.connection));
    }
}

module.exports = new Database();
