$(function(){

	// dragging elements
	$(".draggable").draggable({
		stack: ".draggable", 
		containment: ".container"
	})

	// toggle switch
	$(".switch").click( function() {
		$(".container").toggleClass("darkmode");
	})

	// photo appears on hover
	$(".hoverme").mouseover( function() {
		$(".salamanca").css("display", "block");
	})

	// photo dissapears on mouse out
	$(".hoverme").mouseout( function() {
		$(".salamanca").css("display", "none");
	})

	$(".hoverme2").mouseover( function() {
		$(".hector").css("display", "block");
	})

	$(".hoverme2").mouseout( function() {
		$(".hector").css("display", "none");
	})

	// display hidden text
	$(".clickme").click( function() {
		$(".extra-info").fadeToggle("hide");
	})

	// animate circle
	$(".circle").click( function() {
		$(".circle").animate({
			opacity: 0.5,
			width: "500px",
			height: "500px",
			backgroundColor: "purple"

		})
	})

	


})

function change() {
	   var img1 = "assets/doggo.png",
	       img2 = "assets/doggo2.png";
	   var imgElement = document.getElementById('test');
	   
	   imgElement.src = (imgElement.src === img1)? img2 : img1;
	}












