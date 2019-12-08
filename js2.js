$('#input1').click(function() {
    $("#input1").attr("choice","right");
});
$('#input2').click(function() {
    $("#input1").attr("choice","wrong");
});
$('#input3').click(function() {
   $("#input1").attr("choice","wrong");
});
$('#input4').click(function() {
   $("#input1").attr("choice","wrong");
});
$("#next").click(function(){
	if ($("#input1").attr('choice')=='right') {
		$("#next").attr("href","thirdquestion.html");
		alert('tu est ma petite fleur de champs');
	}
})
