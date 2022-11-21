const { Model } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("tasks", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        due_date: {
            type: Sequelize.DATE
        },
        user_id: {
            type: Sequelize.INTEGER
        },
        priority_id: {
            type: Sequelize.INTEGER
        },

        label_id: {
            type: Sequelize.INTEGER
        },
        project_id: {
            type: Sequelize.INTEGER
        },
        project_section_id: {
            type: Sequelize.INTEGER
        },
        createdAt: {
            field: 'created_at',
            type: Sequelize.DATE,
        },
        updatedAt: {
            field: 'updated_at',
            type: Sequelize.DATE,
        },
        deletedAt: {
            field: 'deleted_at',
            type: Sequelize.DATE,
        },

        paranoid: true

    })

    const Priority = sequelize.define('priorities');

    const Label = sequelize.define('labels');

    Task.belongsTo(Priority, {
        foreignKey: {
            name: "priority_id"
        },
        scope: {
            deletedAt: null,
        },
        as: 'priority',
    });

    Task.belongsTo(Label, {
        foreignKey: {
            name: "label_id"
        },
        scope: {
            deletedAt: null,
        },
        as: 'category'
    });

    Task.addScope(null, {
        where: {
            deletedAt: null
        }
    });

    return Task;
}


