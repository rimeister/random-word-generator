
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}

$(document).ready(function(){

	var hasAnimated = false;

	$('.word-gen-inner').center();

	$('.generate-word-btn').on('click',function(event){
		event.preventDefault();
		
		if (!hasAnimated && $('.breakpointCheck').css('opacity') == 0) {
	

			$('.word-gen-inner').animate({ marginTop: '15px'}, 0, function(){
				randomWord();
				$("html, body").animate({ scrollTop: $(document).height() }, 500, function() {});				
				hasAnimated = true;
			});			

		} else if (!hasAnimated) {
	
			$('.word-gen-inner').animate({ marginTop: '-30px'}, 500, function(){
				randomWord();
				hasAnimated = true;
			});			

		} 


		else {

			randomWord();
	
		}

	});
});

function randomWord() {
	var minCorpusCount = 10000;
	var minDictionaryCount = 20;
	var keeVal = "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
	var requestStr = "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount="+minCorpusCount+"&maxCorpusCount=-1&minDictionaryCount="+minDictionaryCount+"&maxDictionaryCount=-1&minLength=0&maxLength=-1&api_key="+keeVal;

    $.ajax({
        type: "GET",
        url: requestStr,
        dataType: "json",
        success: randomWordComplete
    });
}

function randomWordComplete(data) {
	$('.random-word').html('<h3>'+data.word+'</h3>')
}