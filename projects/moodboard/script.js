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
		$(".horsegirl").css("display", "block");
	})

	// photo dissapears on mouse out
	$(".hoverme").mouseout( function() {
		$(".horsegirl").css("display", "none");
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