// ====== Drinks Model ======
/*
    Drinks Model models our drinks
    through sequelize for our MySQL Database
 */

 module.exports = (sequelize, DataTypes) =>{
    const Drinks = sequelize.define('drinks', {
        drink_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1],
                    msg: 'Beer name too short.'
                }
            }
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        image_link:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        }

    });
    Drinks.associate = (models) => {
        Drinks.hasMany(models.ratings);
        Drinks.hasMany(models.comments);
    }
    return Drinks;
 }