// ====== Comments Model ======
/* 
    Comments Model models our commentss
    through sequelize for our MySQL Database
*/

module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define('comments', {
        comment:{
            type: DataTypes.STRING,
            allowNull: false,
            validated:{
                len:{
                    args:[1],
                    msg: 'Comment is too short.'
                }
            }
        }
    });

    return Comments;
}