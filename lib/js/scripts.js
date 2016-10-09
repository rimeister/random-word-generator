

$(document).ready(function(){
	$('.generate-word-btn').on('click',function(event){
		event.preventDefault();
		randomWord();
	});
});

function randomWord() {
    var requestStr = "http://randomword.setgetgo.com/get.php";

    $.ajax({
        type: "GET",
        url: requestStr,
        dataType: "jsonp",
        jsonpCallback: 'randomWordComplete'
    });
}

function randomWordComplete(data) {
	$('.random-word').html('<h3>'+data.Word+'</h3>')
}