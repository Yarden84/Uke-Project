	function findChord(n, c1, c2){
				
				var i=0; j=0;
				chordParts = ['first', 'third', 'fifth', 'seventh'];
				
				/*finding the notes of the chord:*/
				while (n[i] !== c1){
					i++;
				}
				chordParts[0] = n[i];
				j=i;

				if (c2 === 'Major' || c2 === '7' || c2 === 'maj7'){
					if (i+4 > 11){
						i = (i+4)%11 - 1;
					}else{
						i=i+4;
					}
					chordParts[1] = n[i];

					if (i+3 > 11){
						i = (i+3)%11 - 1;
					}else{
						i=i+3;
					}
					chordParts[2] = n[i];


				}else{
					if (i+3 > 11){
						i = (i+3)%11 - 1;
					}else{
						i=i+3;
					}
					chordParts[1] = n[i];

					if (i+4 > 11){
						i = (i+4)%11 - 1;
					}else{
						i=i+4;
					}
					chordParts[2] = n[i];

				}

				if (c2 === '7' || c2 === 'm7'){
					if (j+10 > 11){
						j = (j+10)%11 - 1;
					}else{
						j=j+10;
					}
					chordParts[3] = n[j];
				}

				if (c2 == 'maj7'){
					if (j+11 > 11){
						j = (j+11)%11 - 1;
					}else{
						j=j+11;
					}
					chordParts[3] = n[j];
				}

				return chordParts;
				
		}

		function placeDot (s, cp, d, p){


			var j=0;
			var intervals = [0, 360, 418, 470, 518, 566, 610, 652, 690, 730, 764, 798];

			for (i=0; i<p; i++){
				while (s[j][0] != cp[0] && s[j][0] != cp[1]&& s[j][0] != cp[2] && s[j][0] != cp[3]){
						j++;
				}
					if (j != 0){

						d.style.display = 'block'; 
						d.style.left = intervals[j] + 'px';
						d.style.bottom = s[j][1] + 'px';
						d.style.opacity = 1.0;

					}else {
						d.style.display = 'block';
						d.style.opacity = 0.0;

					}
				j++;
			}

		}

		function findFret (d){

			var j=0;
			var intervals = [0, 360, 418, 470, 518, 566, 610, 652, 690, 730, 764, 798];

			
			while (d != intervals[j]){
						j++;
			}
				
			return j;
			

		}

		

		function displayImg(){

			
			var notes = ['A', 'Bb', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
			var string1 = [['A', 0], ['Bb', 170], ['B', 170], ['C', 170], ['C#', 170], ['D', 172], ['D#', 172], ['E', 174], ['F', 174], ['F#', 175], ['G', 175], ['G#', 176]];
			var string2 = [['E', 0], ['F', 167], ['F#', 167], ['G', 167], ['G#', 167],['A', 167], ['Bb', 167], ['B', 167], ['C', 167], ['C#', 167], ['D', 167], ['D#', 167]];
			var string3 = [['C', 0], ['C#', 165], ['D', 165], ['D#', 165], ['E', 165], ['F', 165], ['F#', 165], ['G', 165], ['G#', 165], ['A', 165], ['Bb', 165], ['B', 165]];
			var string4 = [['G', 0], ['G#', 161], ['A', 161], ['Bb', 161], ['B', 161], ['C', 159], ['C#', 159], ['D', 157], ['D#', 157], ['E', 156], ['F', 156], ['F#', 155]];

			var chord1 = document.getElementById('chordSelect1').value;
			var chord2 = document.getElementById('chordSelect2').value;


			var dot1 =  document.getElementById('greenDot1');
			var dot2 =  document.getElementById('greenDot2');
			var dot3 =  document.getElementById('greenDot3');
			var dot4 =  document.getElementById('greenDot4');
			
			var chordparts = findChord(notes, chord1, chord2);


			var p = Number(document.getElementById('position').value);
			
			/*alert ('P is: ' + p);*/
			placeDot (string1, chordparts, dot1, p);
			placeDot (string2, chordparts, dot2, p);
			placeDot (string3, chordparts, dot3, p);
			placeDot (string4, chordparts, dot4, p);


		}

		function showChordSelect2(){
			document.getElementById('Major').style.display = 'inline';
			document.getElementById('Minor').style.display = 'inline';
			document.getElementById('Seven').style.display = 'inline';
			document.getElementById('m7').style.display = 'inline';
			document.getElementById('maj7').style.display = 'inline';
		}
		
		function resetChord2(){
			document.getElementById('chordSelect2').options[0].selected = 'selected';
			document.getElementById('greenDot1').style.display = 'none';
			document.getElementById('greenDot2').style.display = 'none';
			document.getElementById('greenDot3').style.display = 'none';
			document.getElementById('greenDot4').style.display = 'none';			
		}


		function resetPosition(){
			document.getElementById('position').options[0].selected = 'selected';
		}
		

		function playChord(){

            var string1 = [['A', 0], ['Bb', 360], ['B', 418], ['C2', 470], ['C#2', 518], ['D2', 566], ['D#2', 610], ['E2', 652], ['F2', 690], ['F#2', 730], ['G2', 764], ['G#2', 798]];
            var string2 = [['E', 0], ['F', 360], ['F#', 418], ['G', 470], ['G#', 518],['A', 566], ['Bb', 610], ['B', 652], ['C2', 690], ['C#2', 730], ['D2', 764], ['D#2', 798]];
            var string3 = [['C', 0], ['C#', 360], ['D', 418], ['D#', 470], ['E', 518], ['F', 566], ['F#', 610], ['G', 652], ['G#', 690], ['A', 730], ['Bb', 764], ['B', 798]];
            var string4 = [['G', 0], ['G#', 360], ['A', 418], ['Bb', 470], ['B', 518], ['C2', 566], ['C#2', 610], ['D2', 652], ['D#2', 690], ['E2', 730], ['F2', 764], ['F#2', 798]];
			var stringArr = [string1, string2, string3, string4];

            var dot1Position = document.getElementById('greenDot1').style.left;
            var dot2Position =  document.getElementById('greenDot2').style.left;
            var dot3Position =  document.getElementById('greenDot3').style.left;
            var dot4Position =  document.getElementById('greenDot4').style.left;

            var dotArr = [Number(dot1Position.slice(0, 3)), Number(dot2Position.slice(0, 3)), Number(dot3Position.slice(0, 3)), Number(dot4Position.slice(0, 3))];

            for (i=0; i<4; i++){
                if (document.getElementById('greenDot'+(i+1)).style.opacity == 0.0) {
                    dotArr[i] = 0;
                }
			}


            var stringAudio = [];

            for (i=0; i<3; i++){
            	var j=0;
				while (stringArr[i][j][1] != dotArr[i] && j<stringArr[i].length){
					j++;
				}
				stringAudio[i] = document.getElementById('uke'+stringArr[i][j][0]);


            }

			return stringAudio[0].play(), stringAudio[1].play(), stringAudio[2].play(), stringAudio[3].play();
		}
