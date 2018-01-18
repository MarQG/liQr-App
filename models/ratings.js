// ====== Ratings Model ======
/* 
    Ratings Model models our Ratings 
    through sequelize for our MySQL Database
*/

module.exports = (sequelize, DataTypes) => {
    const Ratings = sequelize.define('ratings', {
        rating: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Ratings;
}