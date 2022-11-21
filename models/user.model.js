module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        confrim_password: {
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

    return User;
}