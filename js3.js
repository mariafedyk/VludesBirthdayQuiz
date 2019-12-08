$('#input1').click(function() {
    $("#input3").attr("choice","wrong");
});
$('#input2').click(function() {
    $("#input3").attr("choice","wrong");
});
$('#input3').click(function() {
   $("#input3").attr("choice","right");
});
$("#next").click(function(){
	if ($("#input3").attr('choice')=='right') {
		$("#next").attr("href","end.html");
		alert('Add you and me, substract our clothes, divide my legs, and multiply.');
	}
})
