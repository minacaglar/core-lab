$(document).ready(function(){

	
for(var counter=0; counter<110; counter++){

if(counter < 1){
		$('.mybox').append('<p>ISTANBULU DINLIYORUM GOZLERIM KAPALI</p>');
	}

}


	for(var counter=0; counter<100; counter++){

		var positiontop = 100 + (counter * 50);
		var positionleft = 100 + (counter * 50);

		var mydynamicbox = '<div style="width: 100px; height: 100px; opacity: 0; position: absolute; top: ' + positiontop + 'px; left: ' + positionleft + 'px;"></div>';

		$('body').append(mydynamicbox);

		var fontsize = 1 + counter;
		var mydynamictext = '<p style="font-family: IBM Plex Mono, monospace; color: white; tracking: 15px; font-size: ' + fontsize + 'px;">Istanbulu dinliyorum, gozlerim kapali.</p>';

		$('body').append(mydynamictext);

	}



});