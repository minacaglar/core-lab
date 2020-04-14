

var clickButton1 = document.querySelector(".button1");

clickButton1.addEventListener("click", function(){
  document.body.classList.toggle("darkmode");  
})


var clickButton2 = document.querySelector(".button2");
var night1Picture = document.querySelector(".night1");
var night2Picture = document.querySelector(".night2");
var night3Picture = document.querySelector(".night3");
var night4Picture = document.querySelector(".night4");

clickButton2.addEventListener("click", function(){
  night1Picture.classList.toggle("appear");
  night2Picture.classList.toggle("appear"); 
  night3Picture.classList.toggle("appear"); 
  night4Picture.classList.toggle("appear"); 
})


var clickButton3 = document.querySelector(".button3");
var musicBox = document.querySelector(".musicbox");

clickButton3.addEventListener("click", function(){
  musicBox.classList.toggle("appear"); 
})

var clickButton4 = document.querySelector(".button4");
var night3Picture = document.querySelector(".night3");

clickButton4.addEventListener("click", function(){
  night3Picture.classList.toggle("appear"); 
})



$(function(){

	$(".draggable").draggable({
		stack: ".draggable", 
		containment: ".container"
	})

	$(".button1").mouseover( function() {
		$(".spade").css("display", "block");
	})

	$(".button1").mouseout( function() {
		$(".spade").css("display", "none");
	})

	$(".button2").mouseover( function() {
		$(".diamond").css("display", "block");
	})

	$(".button2").mouseout( function() {
		$(".diamond").css("display", "none");
	})

	$(".button3").mouseover( function() {
		$(".heart").css("display", "block");
	})

	$(".button3").mouseout( function() {
		$(".heart").css("display", "none");
	})

	$(".button4").mouseover( function() {
		$(".").css("display", "block");
	})

	$(".button4").mouseout( function() {
		$(".").css("display", "none");
	})


})







