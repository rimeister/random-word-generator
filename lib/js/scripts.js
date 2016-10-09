

$(document).ready(function(){
	$('.generate-word-btn').on('click',function(event){
		event.preventDefault();
		randomWord();
	});
});

function randomWord() {
	var minCorpusCount = 10000;
	var minDictionaryCount = 20;
	var requestStr = "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount="+minCorpusCount+"&maxCorpusCount=-1&minDictionaryCount="+minDictionaryCount+"&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

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