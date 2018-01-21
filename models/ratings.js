// ====== Ratings Model ======
/* 
    Ratings Model models our Ratings 
    through sequelize for our MySQL Database
*/

module.exports = (sequelize, DataTypes) => {
    const Ratings = sequelize.define('ratings', {
        rating: {
            type: DataTypes.BOOLEAN,
            default: false,

        }
    });

    return Ratings;
}