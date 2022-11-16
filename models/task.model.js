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

    })

    const Priority = sequelize.define('properties');

    const Label = sequelize.define('labels');

    Task.belongsTo(Priority, {
        foreignKey: {
            name: "priority_id"
        },
        as: 'priority'
    });
    Task.belongsTo(Label, {
        foreignKey: {
            name: "label_id"
        },
        as: 'category'
    });

    return Task;
}


