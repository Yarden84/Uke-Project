
/*////////////////////////*/
/*     	                  */
/*	1 - Amanda Palmer     */	
/*	2 - Jake Shimabukuro  */	   	     	  
/*  3 - Eddie Vedder      */
/*  4 - James Hill        */
/*     	                  */
/*////////////////////////*/


for (i=1; i<=4; i++){

	$('#p-'+i).hide();
	imgHover(i);
	animateEle(i);
	collapseBtn(i);

}


/*------------------------------------------------*/

/*/////////////*/
/*     	       */
/*	Functions  */	
/*		  	   */
/*/////////////*/

function imgHover(x){

	$('#img'+x).hover(function(){
	
		$('#img-'+x).css('opacity', 1);

		},

		function(){
		$('#img-'+x).css('opacity', 0.6);

	});

}



function animateEle(x){

	$('#img'+x).click(function(){
		$('#img-'+x).animate({
			left: 370,
			top: 30,
			height: 200,
			width: 200,
		});

		$('#textImg'+x).css('font-size', 35)
		$('#textImg'+x).animate({
			left: 370
		});

		$('#p-'+x).show();
		$('#p-'+x).css('width', 720);
		$('#p-'+x).animate({
			bottom: 65
		});
		$('#img'+x).unbind('mouseenter mouseleave');
		
	});

}

function collapseBtn(x){

	$('#readMore'+x).click(function(){
		$('#readMore'+x).hide();
		$('#readMore'+x+'-2').show();
	});

	$('#readMore'+x+'-2').click(function(){
		$('#readMore'+x+'-2').hide();
		$('#readMore'+x).show();
	});

}
