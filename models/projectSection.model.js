module.exports = (sequelize, Sequelize) => {
    const ProjectSection = sequelize.define('project_sections', {
        title: {
            type: Sequelize.STRING
        },
        project_id: {
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

    return ProjectSection;
}