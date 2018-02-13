var express = require('express');
var router = express.Router();
var forms = require('./../forms');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
	
  res.render('index', { 
		title: 'my forms', 
		availableForms :forms.getAvailableForms()
	});
});

router.get('/admin', function(req, res){
	res.render('adminLogin');
})

router.get('/register', function(req, res){
	res.render('register');
})

router.post('/registerSubmit', function(req, res){
	
	fs.readFile('./data/users.json', function(err, data){

		if(err){
			console.log(err)
		}
		var users = JSON.parse(data);
		users.push({
			login : req.param('login'),
			pwd : req.param('password')
		});
		
		fs.writeFile('./data/users.json', JSON.stringify(users), function(err, data){
			res.send('write')
		})
		
	})
})

router.get('/fillForm', function(req, res){
	res.render('fillform', {
		form : forms.getForm(req.param('formID'))
	});
});

router.post('/sendForm', function(req, res){
	forms.submitForm(req);
	res.send('ok <a href="/">home</a>')
});

module.exports = router;
