module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define('comments', {
        text: {
            type: Sequelize.STRING
        },
        file: {
            type: Sequelize.STRING
        },
        user_id: {
            type: Sequelize.INTEGER
        },
        task_id: {
            type: Sequelize.INTEGER
        },
        subtask_id: {
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

    return Comment;
}