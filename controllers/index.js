exports.home = function(req, res, next) {
    console.log('===> Original URL: ' + req.session.url);
    //res.redirect('/tournament');
     res.render('index', { 
        title: 'Home',
         userName: req.user ? req.user.username : ''
     });
};
