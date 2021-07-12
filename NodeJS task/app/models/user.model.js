module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: Sequelize.STRING,
            autoNull: false,
            primaryKey: true,
            notEmpty: true
        },
        login: {
            type: Sequelize.STRING,
            notNull: true,
            notEmpty: true,
            // autoNull: false
            validate: {
                len: [6, 15]
            }
        },
        password: {
            type: Sequelize.STRING,
            autoNull: false,
            notEmpty: true,
            validate: {
                //len:[6,]
                //is:/^[a-zA-Z0-9]{6,20}$/
                is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/
            }
        },
        age: {
            type: Sequelize.INTEGER,
            autoNull: false,
            notEmpty: true,
            validate: {
                min: 18,
                max: 40
            }
        },
        isDeleted: {
            type: Sequelize.BOOLEAN,
            autoNull: false,
            //notEmpty: true
            defaultValue: false
        }
    });
    return User;
}