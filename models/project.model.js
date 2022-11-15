module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define('projects', {
        name: {
            type: Sequelize.STRING
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

    return Project;
}