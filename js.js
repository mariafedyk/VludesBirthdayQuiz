$('#input1').click(function() {
    $("#answer").attr("src","img/sheep4.jpg");
    $("#input2").attr("choice","wrong");
});
$('#input2').click(function() {
    $("#answer").attr("src","img/sheep1.jpg");
    $("#input2").attr("choice","right");
});
$('#input3').click(function() {
   $("#answer").attr("src","img/sheep3.jpg");
   $("#input2").attr("choice","wrong");
});
$('#input4').click(function() {
   $("#answer").attr("src","img/sheep2.jpg");
   $("#input2").attr("choice","wrong");
});
$("#next").click(function(){
	if ($("#input2").attr('choice')=='right') {
		$("#next").attr("href","secondquestion.html");
		alert('Falling In Love Has Neurological Effects Similar To Those Of Cocaine, so you literally are my drug');
	}
})
