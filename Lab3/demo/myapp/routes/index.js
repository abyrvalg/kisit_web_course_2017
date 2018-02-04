var express = require('express');
var router = express.Router();
var forms = require('./../forms');

/* GET home page. */
router.get('/', function(req, res, next) {
	
  res.render('index', { 
		title: 'my forms', 
		availableForms :forms.getAvailableForms()
	});
});

router.get('/admin', function(req, res){
	
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
