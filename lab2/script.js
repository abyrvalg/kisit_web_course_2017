function render(str, data){
	return str.replace(/\{\{(\w+)\}\}/g, function(match, key){
		return data[key]
	})
}

$(function(){
	$('.view').on('click', function(){
		var $slides = $('.slide'),
			currentSlide = $('.slide.active').data('position'),
			slidesCount = $slides.length;
		if(currentSlide < slidesCount-1){
			$slides.removeClass('active');
			$('.slide[data-position='+(1+currentSlide)+']').addClass('active');
		}
	});
	
	$('.addSlide').on('click', function(){
		var $view = $('.view'),
			slidesCount = $('.slide').length,
			$addHead = $('.addHead'),
			templateString = $('#slide_template').html(),
			$addBody = $('.addBody');
		$view.append(render(templateString, {
			pos : slidesCount,
			head : $addHead.val(),
			body : $addBody.val()
		}));
		
		$addHead.val('');
		$addBody.val('');
	});
})