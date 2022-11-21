module.exports = (sequelize, Sequelize) => {
    const Color = sequelize.define('colors', {
        tag: {
            type: Sequelize.STRING
        },
        hex_color: {
            type: Sequelize.STRING
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

    return Color;
}