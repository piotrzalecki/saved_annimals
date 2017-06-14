$(function (){
	
	
$("#counter").click(function(){
	var check;
	var date2 = new Date ($("#date").val());
	check = $("#date").val();
	var date = new Date();
		
		var elapsed = Math.round((date - date2)/86400000);
		var cow,pig,chicken;
		cow = Math.ceil(Math.round(elapsed * 0.0041095890410959)/420);
		pig = Math.ceil(Math.round(elapsed *0.1013698630136986)/57);
		chicken = Math.ceil(Math.round(elapsed * 0.0767123287671233)/1.6);
		var total = cow+pig+chicken;
		
			if (check == ""){
			
			$("#output").html("<h5>Set start date, when you start saving annimals!!</h5>");
		}
		else if (isNaN(total)){
			
			$("#output").html("<h5>Set start date in proper form. MM/DD/YYYY (fe. 04/15/2015).</h5>");			
		}
		
		else{  
		 
			$("#output").html("Not eating meat you saved totaly "+total + " animals!!<ul><li>" + cow + " cow(s)</li><li>" + pig + " pig(s)</li><li>" + chicken + " chicken(s)</li></ul>CONGRATULATIONS!!");
			$("#date").val("");
}}
)
$("#date").click (function(){
	
	$("#output").html("");
	$("#date").val("");
	
})




})