module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('login-page.html')
     });
  
}