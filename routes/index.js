var express = require('express');
var router = express.Router();
var request = require('request');
var twatt = require('../routes/twatt');
var url = require("url");


var user = null;
var twatts = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TWATTUR', twatts: twatts });
});

/*Envoi twatt*/
/*
var authenticated = function (req, res, next) {
	if (req.authenticated())
		return next();
	res.redirect('/');
}*/

router.post('/twatt', function(req, res, next) {
	/*var name;
  if (authenticated) {name = req.user.username} else {name = 'Anonymous'};
	var newTwatt= new twatt({ nickname: name, twatt: req.body.twatt});*/
	twatts.unshift({ nickname: req.body.username, twatt: req.body.twatt});
	res.redirect('/')
});


module.exports = router;

/*GET Login/SignUp page*/
router.get('/loginSign.jade', function(req,res) {
  res.render('loginSign', { title: 'Login or sign up to Twattur!' });
});

/*fast login*//*
router.post('/',function fastLog(user,fastLogin) {
      var login = prompt('Veuillez entrer un pseudo.','pseudo');
      if(login!=null) {
        alert("Bonjour " + login + " ! Si le système d'inscription marchait, je vous proposerais bien de l'utiliser, mais en l'occurence...");
        user = login;
      }
      else {
        alert('erreur. Veuillez réessayer.');
      }
});*/

	
/*passport*/
/*
module.exports = function(passport) {

		router.post('/loginSign', passport.authenticate('login', {
			successRedirect: '/',
				failureRedirect: '/loginSign',
			failureFlash : true
		}));

		router.post('/signup', passport.authenticate('signup', {
			successRedirect: '/home',
			failureRedirect: '/',
			failureFlash : true
		}));

		router.get('/signout', function(req, res) {
			req.logout();
			res.redirect('/');
		});

return router;
}


/*
passport.use('local-signin', new LocalStrategy(
  {passReqToCallback : true}, //allows us to pass back the request to the callback
  function(req, username, password, done) {
    funct.localAuth(username, password)
    .then(function (user) {
      if (user) {
        console.log("LOGGED IN AS: " + user.username);
        req.session.success = 'You are successfully logged in ' + user.username + '!';
        done(null, user);
      }
      if (!user) {
        console.log("COULD NOT LOG IN");
        req.session.error = 'Could not log user in. Please try again.'; //inform user could not log them in
        done(null, user);
      }
    })
    .fail(function (err){
      console.log(err.body);
    });
  }
));*/

