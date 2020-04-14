

var clickButton1 = document.querySelector(".button1");

clickButton1.addEventListener("click", function(){
  document.body.classList.toggle("darkmode");  
})


var clickButton2 = document.querySelector(".button2");
var night1Picture = document.querySelector(".night1");
var night2Picture = document.querySelector(".night2");
var night3Picture = document.querySelector(".night3");
var night4Picture = document.querySelector(".night4");
var night5Picture = document.querySelector(".night5");
var night6Picture = document.querySelector(".night6");
var night7Picture = document.querySelector(".night7");
var night8Picture = document.querySelector(".night8");

clickButton2.addEventListener("click", function(){
  night1Picture.classList.toggle("appear");
  night2Picture.classList.toggle("appear"); 
  night3Picture.classList.toggle("appear"); 
  night4Picture.classList.toggle("appear"); 
  night5Picture.classList.toggle("appear");
  night6Picture.classList.toggle("appear");
  night7Picture.classList.toggle("appear"); 
  night8Picture.classList.toggle("appear"); 
})


var clickButton3 = document.querySelector(".button3");
var musicBox = document.querySelector(".musicbox");

clickButton3.addEventListener("click", function(){
  musicBox.classList.toggle("appear"); 
})

var clickButton4 = document.querySelector(".button4");
var info = document.querySelector(".info");
var info2 = document.querySelector(".info2");
var info3 = document.querySelector(".info3");
var info4 = document.querySelector(".info4");

clickButton4.addEventListener("click", function(){
  info.classList.toggle("disappear");
  info2.classList.toggle("disappear");
  info3.classList.toggle("disappear");
  info4.classList.toggle("disappear");
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
		$(".diamond2").css("display", "block");
	})

	$(".button4").mouseout( function() {
		$(".diamond2").css("display", "none");
	})


})







