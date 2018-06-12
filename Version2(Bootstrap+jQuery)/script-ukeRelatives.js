/*////////////////////////*/
/*     	                  */
/*	1 - Cuatro            */
/*	2 - Cavaquinho        */
/*  3 - Rajão             */
/*  4 - Tiple             */
/*     	                  */
/*////////////////////////*/

for (i=1; i<=4; i++){
    $('#pics'+i).hide();
    $('#vid'+i).hide();

    clickAbout(i);
    clickPic(i);
    clickVid(i);
}


/*------------------------------------------------*/

/*/////////////*/
/*     	       */
/*	Functions  */
/*		  	   */
/*/////////////*/

function clickAbout(x){
    $('#aboutBtn'+x).click(function(){
        $('#about'+x).slideDown();
        $('#pics'+x).hide();
        $('#vid'+x).hide();
    });
}

function clickPic(x){
    $('#picBtn'+x).click(function(){
        $('#about'+x).hide();
        $('#pics'+x).slideDown();
        $('#vid'+x).hide();
    });
}

function clickVid(x){
    $('#vidBtn'+x).click(function(){
        $('#about'+x).hide();
        $('#pics'+x).hide();
        $('#vid'+x).slideDown();
    });
}