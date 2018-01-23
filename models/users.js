// ====== Users Model ======
/* 
    Users Model models our Users 
    through sequelize for our MySQL Database
*/

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        username: {
            type: DataTypes.TEXT
        },
        first_name: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        last_name: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_login: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
    });

    Users.associate = (models) => {
        Users.hasMany(models.comments);
        Users.hasMany(models.ratings);
    }
    return Users;
}