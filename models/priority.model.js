module.exports = (sequelize, Sequelize) => {
    const Priority = sequelize.define('properties', {
        tag: {
            type: Sequelize.STRING
        },
        sort_level: {
            type: Sequelize.INTEGER
        },
        color_id: {
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
    return Priority;
}