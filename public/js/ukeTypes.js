/*////////////////////////*/
/*     	                  */
/*	1 - Banjolele         */
/*	2 - Harp Ukulele      */
/*  3 - Electric Ukulele  */
/*  4 - UBass             */
/*     	                  */
/*////////////////////////*/

for (i=1; i<=4; i++){
    $('#carousel'+i).hide();
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
        $('#carousel'+x).hide();
        $('#vid'+x).hide();
    });
}

function clickPic(x){
    $('#picBtn'+x).click(function(){
        $('#about'+x).hide();
        $('#carousel'+x).slideDown();
        $('#vid'+x).hide();
    });
}

function clickVid(x){
    $('#vidBtn'+x).click(function(){
        $('#about'+x).hide();
        $('#carousel'+x).hide();
        $('#vid'+x).slideDown();
    });
}
