var availableForms = [{
		id : 'default',
		name : 'default form which asks to enter name',
		fields : [{
			id : 'name',
			type : 'string'
		}]
	}],
	submittedForms = [];


module.exports = {
	getAvailableForms : function(){
		return availableForms;
	},
	getForm : function(id){
		for(let i = 0; i < availableForms.length; i++){
			if(availableForms[i].id == id) {
				return availableForms[i]
			}
		}
	},
	submitForm : function(req) {
		var id = req.param('formID'),
			form = this.getForm(id),
			formObj = {};
		for(let i = 0; i < form.fields.length; i++){
			formObj[form.fields[i].id] = req.param(form.fields[i].id);
		}
		
		submittedForms.push({id : id, result : formObj});
		console.log(submittedForms);
	}
};
