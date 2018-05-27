
hoverImg('baritone');

$('#baritoneData').hide();

$('#baritoneImg').click(function(){
	
	changeStatus('baritone');

	moveEle('baritone');
});

//----------------------------------------------------------------------//

hoverImg('tenor');

$('#tenorData').hide();

$('#tenorImg').click(function(){
	
	changeStatus('tenor');

	moveEle('tenor');
	
});

//----------------------------------------------------------------------//

hoverImg('concert');

$('#concertData').hide();

$('#concertImg').click(function(){
	
	changeStatus('concert');
	
	moveEle('concert');
});

//----------------------------------------------------------------------//

hoverImg('soprano');

$('#sopranoData').hide();

$('#sopranoImg').click(function(){
	
	changeStatus('soprano');

	moveEle('soprano');
	
});

//----------------------------------------------------------------------//


///////////////////
//				 //	
//   Functions	 //
//				 //
///////////////////



function hoverImg(a){

	var typeArr = ['baritone', 'tenor', 'concert', 'soprano'];
	var i=0;

	while (typeArr[i] != a || i>3){
		i++;
	}

	$('.'+a+'Hover').hover(function(){
			$('.'+a+'Hover').css('opacity', 1);
		}, 

		function(){
			$('.'+a+'Hover').css('opacity', 0.7);
		});
}



function changeStatus(a){

	var typeArr = ['baritone', 'tenor', 'concert', 'soprano'];
	var i=0;

	while (typeArr[i] != a || i>3){
		i++;
	}

	$('.'+a+'Hover').removeClass();

	typeArr.splice(i, 1);

	for (j=0; j<typeArr.length; j++){
		$('#'+typeArr[j]+'Img').css('opacity', 0.7);
		$('#'+typeArr[j]+'Img').addClass(typeArr[j]+'Hover');
		$('#'+typeArr[j]+'Data').hide();

	}

}



function moveEle(a){

	var positionArr = [['baritone', 35],['tenor',25],['concert',35],['soprano',25]];
	var i=0;
	
	while (positionArr[i][0] != a || i>3){
		i++;
	}
	
	$('#'+a+' h1').animate({
		right: positionArr[i][1]
	});
	
	$('#'+a+'Img').animate({
		left: 70
		// padding-right: 30
	});

	$('#'+a+'Data').slideDown();

	positionArr.splice(i, 1);

	for (j=0; j<positionArr.length; j++){
		$('#'+positionArr[j][0]+' h1').animate({
			right: 0
		});
		$('#'+positionArr[j][0]+'Img').animate({
			left: 0
		});
	}
}


