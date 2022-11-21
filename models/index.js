const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    // operatorsAliases: false,
    // pool: {
    //     max: dbConfig.pool.max,
    //     min: dbConfig.pool.min,
    //     acquire: dbConfig.pool.acquire,
    //     idle: dbConfig.pool.idle
    // }
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.task = require("./task.model.js")(sequelize, Sequelize);
db.subtask = require("./subtask.model.js")(sequelize, Sequelize);
db.project = require("./project.model.js")(sequelize, Sequelize);
db.projectSection = require("./projectSection.model.js")(sequelize, Sequelize);
db.priority = require("./priority.model.js")(sequelize, Sequelize);
db.label = require("./label.model.js")(sequelize, Sequelize);
db.color = require("./color.model.js")(sequelize, Sequelize);
db.comment = require("./comment.model")(sequelize, Sequelize);
db.user = require("./user.model")(sequelize, Sequelize);


module.exports = db;