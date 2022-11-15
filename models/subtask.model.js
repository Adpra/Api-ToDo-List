module.exports = (sequelize, Sequelize) => {
    const Subtask = sequelize.define('subtasks', {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        due_date: {
            type: Sequelize.DATE
        },
        priority_id: {
            type: Sequelize.INTEGER
        },
        label_id: {
            type: Sequelize.INTEGER
        },
        parent_id: {
            type: Sequelize.INTEGER
        },
        task_id: {
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

    return Subtask;
}