// ===== Comments Controller ========
/*
    Controllers the Comments routes and 
    collects and renders comments data.
 */

 module.exports = {
     newComment: (req, res)=>{
        res.render('comments/newcomment');
     },
     editComment: (req, res) => {
        res.render('comments/editcomment');
     },
 }