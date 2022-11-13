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


    })

    return Task;
}